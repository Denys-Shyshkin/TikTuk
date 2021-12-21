import React, { useState, useEffect } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import { useNavigate, useLocation } from 'react-router-dom';

import { Pages } from '../../constants';
import {
  StyledBox,
  StyledAppBar,
  StyledTypography,
  StyledIconButton,
} from './styles';

const MenuAppBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isActive, setIsActive] = useState({
    feed: false,
    profile: false,
  });

  useEffect(() => {
    switch (location.pathname) {
      case Pages.Feed:
        setIsActive({ feed: true, profile: false });
        break;
      case Pages.Profile:
        setIsActive({ feed: false, profile: true });
        break;
      default:
        setIsActive({ feed: false, profile: false });
        break;
    }
  }, [location]);

  const clickHandler = () => {
    navigate(Pages.Feed);
  };

  return (
    <StyledBox>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledTypography variant="h6" onClick={clickHandler}>
            TikTuk :&#41;
          </StyledTypography>
          <div>
            <StyledIconButton
              size="large"
              aria-label="get trending feed"
              onClick={clickHandler}
              color={isActive.feed ? 'default' : 'inherit'}
            >
              <MusicVideoIcon />
              <StyledTypography variant="body1">Feed</StyledTypography>
            </StyledIconButton>
            <IconButton
              size="large"
              aria-label="account of current user"
              onClick={() => navigate(Pages.Profile)}
              color={isActive.profile ? 'default' : 'inherit'}
            >
              <AccountCircle />
              <StyledTypography variant="body1">Profile</StyledTypography>
            </IconButton>
          </div>
        </Toolbar>
      </StyledAppBar>
    </StyledBox>
  );
};

export default MenuAppBar;
