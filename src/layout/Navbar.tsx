import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import {
  Button, AppBar, Box, Toolbar, Typography, Menu, Avatar, Tooltip, MenuItem, IconButton,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userDataContext } from '../context';

const pages = [
  { title: 'Find Therapists', link: '/therapists' },
];
const settings = ['Profile'];

const Navbar = () => {
  const userData = useContext(userDataContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/login');
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: '#F4F7FF', color: '#516EFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            NTherapy
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link
                  to={page.link}
                  key={page.title}
                  style={{ textDecoration: 'none', color: '#516EFF' }}
                >
                  {page.title}

                </Link>
              </Button>
            ))}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {userData?.userData ? (
                  <>
                    <Typography sx={{ color: '#516EFF', fontWeight: 'bold', ml: 3 }}>
                      {userData?.userData.fullName || 'Amain'}
                    </Typography>
                    <Avatar
                      alt="user avatar"
                      src={userData?.userData?.profileImg || 'https://2u.pw/boTFzk6'}
                      sx={{ ml: 1 }}
                    />
                    <LogoutIcon onClick={handleLogout} sx={{ ml: 1 }} />
                  </>
                ) : (
                  <>
                    <Button variant="contained" sx={{ borderColor: 'primary.main', ml: 3 }}>
                      <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                        SIGN UP
                      </Link>
                    </Button>

                    <Button variant="contained" sx={{ borderColor: 'primary.main', ml: 1 }}>
                      <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        SIGN IN
                      </Link>
                    </Button>

                  </>
                )}
              </IconButton>

            </Tooltip>
            {(userData?.userData?.role === 'therapist' || userData?.userData?.role === 'admin') && (

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      {userData?.userData?.role === 'therapist' ? (
                        <Link to={`/therapist/${userData?.userData?.therapistId}`}>
                          {setting}
                        </Link>
                      ) : (
                        <Link to="/admin">Dashboard</Link>
                      )}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            )}

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
