import { Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Inbox as InboxIcon,
} from '@mui/icons-material';

import Logo from '../../../assets/img/logo.png';

const DashBoard = () => {
  const navigate = useNavigate();

  const handleToPageHome = () => {
    navigate('/');
  };
  const handleToPageTherapists = () => {
    navigate('/admin/therapists');
  };
  const handleToPageBugs = () => {
    navigate('/admin/bugs');
  };

  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: '175px' }}>
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '180px' }} />
      </Link>
      <List style={{ paddingRight: '40px' }}>
        <ListItem button onClick={handleToPageHome}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleToPageTherapists}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Therapists" />
        </ListItem>
        <ListItem button onClick={handleToPageBugs}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Bugs" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DashBoard;
