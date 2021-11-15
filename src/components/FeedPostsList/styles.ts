import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledGridContainer = styled(Grid)<GridProps>(() => ({
  paddingLeft: "30vw",
  marginTop: 50,
  marginBottom: 50,
}));

const StyledDiv = styled("div")(() => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginBottom: 20,
}));

export { StyledGridContainer, StyledDiv };
