import { Box, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import logo from '../../assets/img/logo.png';

const Footer = () => (
  <footer>
    <Box sx={{
      backgroundColor: '#f7f4f4', padding: '60px 0', boxShadow: '10px 10px 8px 7px #888888', mt: 3,
    }}
    >
      <Box sx={{
        maxWidth: 'container', display: 'flex', flexDirection: 'row', alignItems: 'center',
      }}
      >
        <Box sx={{ flexBasis: '50%' }}>
          <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
            <img src={logo} alt="logo" style={{ maxWidth: '30%' }} />
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#516EFF',
              fontWeight: 'bold',
              fontSize: '18.52px',
              lineHeight: '28px',
              width: '500px',
              textAlign: 'center',
              mx: 'auto',
            }}
          >
            We&apos;re committed to delivering life-changing anxiety
            and depression care to everyone who needs it.
          </Typography>
        </Box>
        <Box sx={{ flexBasis: '50%' }}>
          <Box sx={{ marginBottom: '20px' }}>
            <Typography
              variant="h3"
              sx={{
                color: '#516EFF',
                fontWeight: 600,
                fontSize: '22.52px',
                lineHeight: '28px',
                textAlign: 'center',
              }}
            >
              CONTACTS
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              color: '#516EFF',
              fontWeight: 500,
              fontSize: '18.52px',
              lineHeight: '28px',
              textAlign: 'center',
            }}
          >
            <Link href="/" sx={{ color: '#516EFF' }}>Ntherapist@gmail.com</Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#516EFF',
              fontWeight: 500,
              fontSize: '18.52px',
              lineHeight: '28px',
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
      <Box sx={{
        maxWidth: 'container', display: 'flex', flexDirection: 'row', justifyContent: 'center',
      }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#fff',
            fontWeight: 500,
            fontSize: '15.52px',
            lineHeight: '28px',
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
