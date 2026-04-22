const Contact = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Contact Us</h2>

      <form>
        <input placeholder="Name" /><br />
        <input placeholder="Email" /><br />
        <input placeholder="Phone" /><br />
        <textarea placeholder="Message"></textarea><br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;