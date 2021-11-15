import Box, { BoxProps } from "@mui/material/Box";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Typography, { TypographyProps } from "@mui/material/Typography";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)<BoxProps>(() => ({
  flexGrow: 1,
}));

const StyledAppBar = styled(AppBar)<AppBarProps>(() => ({
  backgroundColor: "#F4C486",
}));

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  flexGrow: 1,
  marginLeft: 5,
  ":hover": {
    cursor: "pointer",
  },
}));

const StyledIconButton = styled(IconButton)<IconButtonProps>(() => ({
  marginRight: 10,
}));

export { StyledBox, StyledAppBar, StyledTypography, StyledIconButton };
