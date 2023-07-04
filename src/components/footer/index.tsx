import { Box, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import logo from '../../assets/img/logo.png';
import {
  BoxContainer, BoxContainerFooter, TypographyBody1, TypographyH3, BoxCopy, TypographyBody2,
} from './classes';

const Footer = () => (
  <footer>
    <Box sx={BoxContainer}>
      <Box sx={BoxContainerFooter}>
        <Box sx={{ flexBasis: '50%' }}>
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img src={logo} alt="logo" style={{ maxWidth: '30%' }} />
          </Box>
          <Typography
            variant="body1"
            sx={TypographyBody1}
          >
            We&apos;re committed to delivering life-changing anxiety
            and depression care to everyone who needs it.
          </Typography>
        </Box>
        <Box sx={{ flexBasis: '50%' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography
              variant="h3"
              sx={TypographyH3}
            >
              CONTACTS
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={TypographyBody2}
          >
            <Link href="/" sx={{ color: '#516EFF' }}>Ntherapist@gmail.com</Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#516EFF',
              textAlign: 'center',
              marginTop: '16px',
            }}
          >
            <Link href="/" sx={{ marginRight: '8px' }}>
              <Facebook fontSize="small" sx={{ color: '#516EFF' }} />
            </Link>
            <Link href="/" sx={{ marginRight: '8px' }}>
              <Twitter fontSize="small" sx={{ color: '#516EFF' }} />
            </Link>
            <Link href="/">
              <Instagram fontSize="small" sx={{ color: '#516EFF' }} />
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: '#5885ff', padding: '20px 0' }}>
      <Box sx={BoxCopy}>
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          &copy; 2023. All rights reserved.
        </Typography>
      </Box>
    </Box>
  </footer>
);

export default Footer;
