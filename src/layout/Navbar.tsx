import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import LogoutIcon from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Button, AppBar, Box, Toolbar, Typography, Menu, Avatar, MenuItem, IconButton,
} from '@mui/material';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userDataContext } from '../context';
import Logo from '../assets/img/logo.png';

export { ProtectedUser } from '../routes/protected';

const pages = [
  { title: 'Home', link: '/' },
  { title: 'Therapists', link: '/therapists' },

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
    userData?.setUserData(null);
    navigate('/');
  };
  return (

    <AppBar position="static" sx={{ backgroundColor: '#F4F7FF', color: '#516EFF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '160px' }} />
          </Link>

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
              <Link
                to={page.link}
                key={page.title}
                style={{ textDecoration: 'none', color: '#516EFF' }}
              >
                <Button
                  key={page.title}
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2, color: '#516EFF', display: 'block', ml: 2,
                  }}
                >
                  {page.title}
                </Button>
              </Link>

            ))}

          </Box>

          <Box sx={{ display: 'flex' }}>
            {userData?.userData ? (

              <>
                <Button onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: '#516EFF', fontWeight: 'bold', ml: 3 }}>
                    {userData?.userData.fullName || 'Ahmed Izz'}
                  </Typography>

                  <Avatar
                    alt="user avatar"
                    src={`${userData?.userData?.profileImg}?timestamp=${Date.now()} || 'https://2u.pw/boTFzk6'`}
                    sx={{ ml: 1 }}
                  />
                </Button>
                <LogoutIcon onClick={handleLogout} sx={{ ml: 1, mt: 1, cursor: 'pointer' }} />

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
                    <Typography textAlign="center" sx={{ width: '120px' }}>
                      {userData?.userData?.role === 'therapist' ? (
                        <Link to={`/therapist/${userData?.userData?.therapistId}`} style={{ textDecoration: 'none', fontWeight: 'bold' }}>
                          <AccountCircleIcon style={{
                            position: 'absolute', top: '5', left: '22',
                          }}
                          />
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
