import React, { useState } from 'react';
import './PromotionPopup.css';
import { Close as CloseIcon, Send as SendIcon, Person as PersonIcon, Email as EmailIcon, EditNote as FormIcon } from '@mui/icons-material';
import { IconButton, TextField, MenuItem, Button, Box, Typography, Fab } from '@mui/material';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const PromotionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    adults: 1,
    children: 0,
    message: 'I am interested in a Japan Trip!'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "popup_registrations"), {
        ...formData,
        timestamp: serverTimestamp(),
        source: "Right Floating Popup"
      });

      const waMessage = `Hi TripToJapan! I want to register for a Japan Trip.\n\nName: ${formData.name}\nEmail: ${formData.email}\nAdults: ${formData.adults}\nChildren: ${formData.children}`;
      const encodedMessage = encodeURIComponent(waMessage);
      window.open(`https://wa.me/919560439303?text=${encodedMessage}`, '_blank');
      
      setIsOpen(false);
    } catch (error) {
      console.error("Error saving registration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="promo-wrapper">
      {/* 🚀 Floating Toggle Button on Right (Shifted as requested) */}
      <Box sx={{ 
        position: 'fixed', 
        bottom: 110, // Stacked above the chat icon
        right: { xs: 20, md: 30 }, 
        zIndex: 10000, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: 1 
      }}>
        <Typography variant="caption" sx={{ bgcolor: '#002366', color: '#FFB7C5', px: 1, py: 0.3, borderRadius: 1, fontWeight: '800', fontSize: '9px' }}>
          REGISTRATION
        </Typography>
        <Fab 
          onClick={() => setIsOpen(!isOpen)}
          size="medium"
          sx={{ 
            bgcolor: '#FFB7C5', 
            color: '#002366',
            width: { xs: 50, md: 60 },
            height: { xs: 50, md: 60 },
            boxShadow: '0 8px 25px rgba(255, 183, 197, 0.4)',
            '&:hover': { bgcolor: '#f48fb1', transform: 'scale(1.1)' },
            transition: 'all 0.3s ease'
          }}
        >
          {isOpen ? <CloseIcon /> : <FormIcon sx={{ fontSize: 28 }} />}
        </Fab>
      </Box>

      {/* 📋 The Popup Form on Right */}
      {isOpen && (
        <div className="promo-popup-container-right">
          <div className="promo-popup-card">
            <IconButton 
              className="close-btn" 
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
            
            <div className="promo-header">
              <h3>Quick Registration</h3>
              <p>Plan your Japan trip now</p>
            </div>

            <form onSubmit={handleSubmit} className="promo-form">
              <TextField
                fullWidth
                size="small"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <PersonIcon sx={{ color: '#FFB7C5', mr: 1, fontSize: 18 }} />,
                  sx: { fontSize: '13px' }
                }}
                sx={inputStyle}
              />
              
              <TextField
                fullWidth
                size="small"
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                InputProps={{
                  startAdornment: <EmailIcon sx={{ color: '#FFB7C5', mr: 1, fontSize: 18 }} />,
                  sx: { fontSize: '13px' }
                }}
                sx={inputStyle}
              />

              <Box sx={{ display: 'flex', gap: 1, mb: 1.5 }}>
                <Box sx={{ flex: 1 }}>
                   <Typography variant="caption" sx={{ fontSize: '10px', color: '#64748b', ml: 0.5, mb: 0.2, display: 'block' }}>Adults</Typography>
                   <TextField
                    select
                    fullWidth
                    size="small"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    sx={selectStyle}
                  >
                    {[1, 2, 3, 4, 5, 6].map(n => (
                      <MenuItem key={n} value={n} sx={{ fontSize: '12px' }}>{n}</MenuItem>
                    ))}
                  </TextField>
                </Box>
                
                <Box sx={{ flex: 1 }}>
                   <Typography variant="caption" sx={{ fontSize: '10px', color: '#64748b', ml: 0.5, mb: 0.2, display: 'block' }}>Children</Typography>
                   <TextField
                    select
                    fullWidth
                    size="small"
                    name="children"
                    value={formData.children}
                    onChange={handleChange}
                    sx={selectStyle}
                  >
                    {[0, 1, 2, 3, 4].map(n => (
                      <MenuItem key={n} value={n} sx={{ fontSize: '12px' }}>{n}</MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  bgcolor: '#002366',
                  color: '#fff',
                  fontWeight: '800',
                  fontSize: '12px',
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#FFB7C5', color: '#002366' }
                }}
              >
                {isSubmitting ? 'Registering...' : 'Register Trip Now'}
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const inputStyle = {
  mb: 1.2,
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'rgba(0,35,102,0.1)' },
    '&:hover fieldset': { borderColor: '#FFB7C5' },
    '&.Mui-focused fieldset': { borderColor: '#002366' },
  }
};

const selectStyle = {
  '& .MuiOutlinedInput-root': {
    fontSize: '12px',
    '& fieldset': { borderColor: 'rgba(0,35,102,0.1)' },
  }
};

export default PromotionPopup;
