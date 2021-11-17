import React from "react";
import { useNavigate } from "react-router-dom";

import { Pages } from "../../constants";
import { StyledSnackbar, StyledAlert } from "./styles";

type Props = {
  message: string;
};

const ErrorAlert = ({ message }: Props) => {
  const navigate = useNavigate();
  const closeHandler = () => {
    navigate(Pages.Feed);
  };

  return (
    <StyledSnackbar
      open={true}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={closeHandler}
      onClick={closeHandler}
    >
      <StyledAlert elevation={6} variant="filled" severity="error">
        {message}
      </StyledAlert>
    </StyledSnackbar>
  );
};

export default ErrorAlert;
