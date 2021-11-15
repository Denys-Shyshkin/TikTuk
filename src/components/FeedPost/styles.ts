import Avatar, { AvatarProps } from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";

const StyledAvatar = styled(Avatar)<AvatarProps>(() => ({
  margin: 10,
  ":hover": {
    cursor: "pointer",
  },
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
  width: 400,
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
}));

const StyledArticle = styled("article")(() => ({
  display: "flex",
  alignItems: "end",
}));

export { StyledAvatar, StyledDiv, StyledSection, StyledArticle };
