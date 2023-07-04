import { Box, Typography, IconButton } from '@mui/material';
import {
  Facebook, Twitter, Instagram,
} from '@mui/icons-material';
import logo from '../../assets/img/logo.png';

const Footer = () => (
  <Box
    sx={{
      backgroundColor: '#516EFF',
      padding: '16px',
      marginTop: '32px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
  >
    <img src={logo} alt="logo" style={{ width: '200px' }} />
    <Typography variant="body2" color="#fff">
      &copy; 2023 Ntherapy. All rights reserved.
    </Typography>

    <Box sx={{ marginTop: '16px' }}>
      <IconButton
        sx={{ color: '#fff' }}
        aria-label="Facebook"
        href="https://www.facebook.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </IconButton>
      <IconButton
        sx={{ color: '#fff' }}
        aria-label="Twitter"
        href="https://www.twitter.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </IconButton>
      <IconButton
        sx={{ color: '#fff' }}
        aria-label="Instagram"
        href="https://www.instagram.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
