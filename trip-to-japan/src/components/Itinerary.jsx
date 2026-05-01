import React from 'react';
import { Box, Typography, Grid, Stack, Chip, Divider, Paper, Container } from '@mui/material';
import { CheckCircle as CheckIcon, Cancel as CrossIcon } from '@mui/icons-material';
import { japanItinerary } from '../data/itineraryData';

const JapanPackage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography variant="h2" sx={{ fontWeight: '900', color: '#002366', mb: 1 }}>
          Japan Highlights Express
        </Typography>
        <Typography variant="h5" sx={{ color: '#FFB7C5', fontWeight: '800', letterSpacing: 2 }}>
          7 NIGHTS / 8 DAYS SIGNATURE TOUR
        </Typography>
      </Box>

      {/* Step-by-Step Timeline */}
      <Stack spacing={10}>
        {japanItinerary.map((item, index) => (
          <Grid 
            container 
            key={index} 
            spacing={6} 
            alignItems="center" 
            flexDirection={index % 2 !== 0 ? 'row-reverse' : 'row'}
          >
            {/* Image Section */}
            <Grid item xs={12} md={6}>
              <Box 
                sx={{ 
                  width: '100%', 
                  height: '400px', 
                  overflow: 'hidden', 
                  borderRadius: 4, 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
                }}
              >
                <Box 
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    transition: 'transform 0.5s ease',
                    '&:hover': { transform: 'scale(1.05)' } 
                  }}
                />
              </Box>
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Chip 
                    label={`Day ${item.day}`} 
                    sx={{ bgcolor: '#002366', color: '#fff', fontWeight: '900', px: 1 }} 
                  />
                  <Typography variant="h4" sx={{ fontWeight: '800', color: '#333' }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ color: '#555', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {item.description}
                </Typography>
                <Grid container spacing={2}>
                  {item.highlights.map((point, i) => (
                    <Grid item xs={6} key={i}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CheckIcon sx={{ color: '#FFB7C5', fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: '#666', fontWeight: '600' }}>
                          {point}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Stack>

      {/* Inclusions Section */}
      <Paper 
        sx={{ 
          mt: 15, 
          p: { xs: 4, md: 8 }, 
          borderRadius: 6, 
          bgcolor: '#f8fafc', 
          borderTop: '6px solid #FFB7C5',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)' 
        }}
      >
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: '900', mb: 4, color: '#002366' }}>
              Inclusions
            </Typography>
            <Stack spacing={2}>
              {[
                "2 nights in Tokyo, 2 in Kyoto, 2 in Hiroshima, 1 in Osaka",
                "Bullet Train (Ordinary Class Reserved Seat)",
                "Daily Breakfast except arrival date"
              ].map((text, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CheckIcon sx={{ color: '#FFB7C5', mt: 0.5 }} />
                  <Typography variant="body1" sx={{ fontWeight: '600', color: '#444' }}>{text}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: '900', mb: 4, color: '#f44336' }}>
              Exclusions
            </Typography>
            <Stack spacing={2}>
              {[
                "International airfares & Visa Fee",
                "Travel insurance (compulsory)",
                "Personal expenses"
              ].map((text, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <CrossIcon sx={{ color: '#FFB7C5', mt: 0.5 }} />
                  <Typography variant="body1" sx={{ fontWeight: '600', color: '#444' }}>{text}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default JapanPackage;
