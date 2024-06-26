import RootLayout from '@/layouts/RootLayout';
import * as React from 'react';
import { AppBar, Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TopHeader from '@/components/common/Header';
import Header from '@/components/common/Header';

function Payment() {
  const [formData, setFormData] = React.useState({
    id: '',
    receipt: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('id', formData.id);
      formDataToSend.append('paymentReceipt', formData.receipt); // Updated key name

      const response = await fetch('http://localhost:8000/student/uploadpayment', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();
      console.log('Response:', data);

      // Reset form after successful submission
      setFormData({
        id: '',
        receipt: null,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      receipt: file,
    });
  };

  return (
    <RootLayout>
      <TopHeader />
     
      <AppBar position="static" color="inherit">
        {/* Add any content you want in the AppBar */}
      </AppBar>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
          margin: 'auto', // Center the form horizontally
          padding: 2,
          borderRadius: 2,
          bgcolor: '#f2f2f2', // Greyish color,
          marginTop: '20vh',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add box shadow
        }}
      >
        <Typography variant="h6" align="center">Payment Form</Typography>
        <input
          type="text"
          name="id"
          placeholder="Enter your ID"
          value={formData.id}
          onChange={handleInputChange}
          required
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <input
            type="file"
            id="receipt-upload"
            accept="image/*, .pdf"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label htmlFor="receipt-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload Receipt
            </Button>
          </label>
          <Typography variant="body2" color="text.secondary">Accepted formats: Image, PDF</Typography>
        </Box>
        <Button type="submit" variant="contained">Submit</Button>
      </Box>

    </RootLayout>
  );
}

export default Payment;
