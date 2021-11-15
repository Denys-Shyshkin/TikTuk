import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(() => ({
  marginTop: 5,
  marginBottom: 5,
}));

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  ":hover": {
    cursor: "pointer",
  },
}));

export { StyledDiv, StyledTypography };
