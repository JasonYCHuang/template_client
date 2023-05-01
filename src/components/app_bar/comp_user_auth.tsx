import React, { useState } from 'react';
import {
  IconButton, Divider, ListItemIcon, Menu, MenuItem,
} from '@mui/material';
import {
  AccountCircle, PersonOutline, Logout,
} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { setAuth } from '../../actions/userSlice';

const UserAuthComp = () => {
  const { auth, empId } = useAppSelector((state: any) => state.user);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const accountMenuOpen = Boolean(anchorEl);
  const dispatch = useAppDispatch();

  const onClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const onClickLogOut = () => {
    dispatch(setAuth({ auth: false }));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        onClick={onClickAvatar}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={accountMenuOpen ? 'account-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={accountMenuOpen ? 'true' : undefined}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={accountMenuOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem dense>
          <ListItemIcon>
            <PersonOutline fontSize="small" />
          </ListItemIcon>
          {
            auth
              ? empId
              : '未登入'
          }
        </MenuItem>
        {
          auth
            ? (
              <div>
                <Divider sx={{ my: '10px' }} />
                <MenuItem dense onClick={onClickLogOut}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  登出
                </MenuItem>
              </div>
            )
            : null
        }
      </Menu>
    </div>
  );
};

export default UserAuthComp;
