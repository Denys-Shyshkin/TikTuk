import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  marginTop: 100,
}));

export { StyledTypography };
