import { Box, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import {
  BoxContainer, BoxContainerFooter, TypographyBody1, TypographyH3, BoxCopy, TypographyBody2,
} from './classes';
import Logo from '../logo';

const Footer = () => (
  <footer>
    <Box sx={BoxContainer}>
      <Box sx={BoxContainerFooter}>
        <Box sx={{ flexBasis: '50%' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Logo />

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
          <Box sx={{ mt: 3.5 }}>
            <Typography
              variant="h3"
              sx={TypographyH3}
            >
              CONTACT US
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={TypographyBody2}
          >
            <Link href="https://mail.google.com" sx={{ color: '#fff' }}>ntherapypro@gmail.com</Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#fff',
              textAlign: 'center',
              marginTop: '22px',
            }}
          >
            <Link href="/" sx={{ marginRight: '8px' }}>
              <Facebook fontSize="small" sx={{ color: '#fff' }} />
            </Link>
            <Link href="/" sx={{ marginRight: '8px' }}>
              <Twitter fontSize="small" sx={{ color: '#fff' }} />
            </Link>
            <Link href="/">
              <Instagram fontSize="small" sx={{ color: '#fff' }} />
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
          &copy;
          {new Date().getFullYear()}
          . All rights reserved.
        </Typography>
      </Box>
    </Box>
  </footer>
);

export default Footer;
