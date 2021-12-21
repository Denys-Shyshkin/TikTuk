import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorObject } from '../../types/trendingFeedTypes';
import { Pages, ErrorMessages } from '../../constants';
import { StyledSnackbar, StyledAlert } from './styles';

type Props = {
  message: string | undefined
}

export const renderErrorAlert = (profile: ErrorObject) => {
  return <ErrorAlert message={profile?.message} />;
};

const ErrorAlert = ({ message }: Props) => {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();

  const closeHandler = () => {
    if (message === ErrorMessages.VideoError) {
      setOpen(false);
    } else {
      navigate(Pages.Feed);
    }
  };

  return (
    <StyledSnackbar
      open={open}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={closeHandler}
      onClick={closeHandler}
    >
      <StyledAlert elevation={6} variant="filled" severity="error">
        {message || ErrorMessages.UnknownError}
      </StyledAlert>
    </StyledSnackbar>
  );
};

export default ErrorAlert;
