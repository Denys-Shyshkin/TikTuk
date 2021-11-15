import React from "react";

import { StyledSnackbar, StyledAlert } from "./styles";

const ErrorAlert = () => {
  return (
    <StyledSnackbar
      open={true}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <StyledAlert elevation={6} variant="filled" severity="error">
        Something Went Wrong...
      </StyledAlert>
    </StyledSnackbar>
  );
};

export default ErrorAlert;
