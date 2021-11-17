import Snackbar, { SnackbarProps } from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

const StyledSnackbar = styled(Snackbar)<SnackbarProps>(() => ({
  marginTop: 70,
  ":hover": {
    cursor: "pointer",
  },
}));

const StyledAlert = styled(MuiAlert)<AlertProps>(() => ({
  width: "100%",
}));

export { StyledSnackbar, StyledAlert };
