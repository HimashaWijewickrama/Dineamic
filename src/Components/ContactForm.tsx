// ContactForm.tsx

import React from 'react';
import FeatureImg from './FeatureImg';
import { Box, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@mui/material';
const productImage = {
    width: "100%",
    height: "350px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
  
const ContactForm: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent="space-between"
            p={4}
            // maxWidth="800px"
            margin="auto"
        >
            {/* Left section for contact text */}
            <Box flex={1} mr={{ md: 4 }} mb={{ xs: 4, md: 0 }}>
                <Typography variant="h6" fontWeight="bold">
                    Any special requests from us?
                </Typography>
                <Typography variant="body1" color="textSecondary" mt={1}>
                    For urgent matters please call us at <Link href="tel:610-687-1575" color="primary">610-687-1575</Link>
                </Typography>
                <br/>
                <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
                  <FeatureImg/>

            {/* <img src="https://images.unsplash.com/photo-1705917893168-e03c7da62577?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             style={productImage} alt="faq" /> */}
          </Box>
            </Box>

            {/* Right section for the form */}
            <Box flex={2}>
                <form>
                    <TextField
                        label="Full name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                    />

                    {/* Checkbox for promotional materials */}
                    <FormControlLabel
                        control={<Checkbox />}
                        label="You may receive marketing and promotional materials. Contact the merchant for their privacy practices."
                    />

                    {/* Terms and reCAPTCHA note */}
                    <Typography variant="caption" color="textSecondary" display="block" mt={2}>
                        This form is protected by reCAPTCHA and the Google <Link href="https://policies.google.com/privacy" target="_blank">Privacy Policy</Link> and <Link href="https://policies.google.com/terms" target="_blank">Terms of Service</Link> apply.
                    </Typography>

                    {/* Submit button */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default ContactForm;
