import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  alignItems: "center",
}));

const StyledIconButton = styled(IconButton)<IconButtonProps>(() => ({
  backgroundColor: "#CFC8C0",
  margin: 5,
}));

export { StyledDiv, StyledSection, StyledIconButton };
