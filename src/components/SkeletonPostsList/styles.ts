import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledGridContainer = styled(Grid)<GridProps>(() => ({
  marginTop: 50,
  marginBottom: 50,
  width: 700,
  marginLeft: "auto",
  marginRight: "auto",
}));

export { StyledGridContainer };
