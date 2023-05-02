import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, IconButton, Divider, Drawer,
  List, ListItem, ListItemButton, ListItemIcon,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Battery5BarIcon from '@mui/icons-material/Battery5Bar';

type AnchorTyp = 'left';

const styleLink = {
  color: 'black',
  textDecoration: 'none',
  padding: '18px 26px',
  width: '250px',
};
const styleListItem = {
  '& .MuiListItem-root': {
    padding: '0px',
  },
  '& .MuiListItemButton-root': {
    padding: '0px',
  },
};

const DrawerContentComp = (anchor: AnchorTyp, toggleDrawer: any) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List sx={styleListItem}>
      <ListItem key="style_basic" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <Link to="/style_basic" style={styleLink}>
            風格 - 基本HTML
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="style_mui" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <Link to="/style_mui" style={styleLink}>
            風格 - Mui
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="style_mui_adv" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <Link to="/style_mui_adv" style={styleLink}>
            風格 - Mui 進階
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="data_reducer" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Battery5BarIcon />
          </ListItemIcon>
          <Link to="/data_reducer" style={styleLink}>
            數據流 - Reducer
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider />
    </List>
  </Box>
);

const DrawerComp = () => {
  const anchorLeft = 'left';
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (
    anchor: AnchorTyp,
    open: boolean,
  ) => (
    event: React.KeyboardEvent
    |
    React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' && (
        (event as React.KeyboardEvent).key === 'Tab'
        || (event as React.KeyboardEvent).key === 'Shift'
      )
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <React.Fragment key={anchorLeft}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(anchorLeft, true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={anchorLeft}
        open={state[anchorLeft]}
        onClose={toggleDrawer(anchorLeft, false)}
      >
        {DrawerContentComp(anchorLeft, toggleDrawer)}
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerComp;
