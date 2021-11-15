import Avatar, { AvatarProps } from "@mui/material/Avatar";
import Card, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)<CardProps>(() => ({
  width: 360,
  height: "fit-content",
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  justifyContent: "space-around",
}));

const StyledAvatar = styled(Avatar)<AvatarProps>(() => ({
  height: 100,
  width: 100,
  margin: 20,
}));

const StyledArticle = styled("article")(() => ({
  display: "flex",
  alignItems: "flex-end",
}));

export { StyledCard, StyledSection, StyledAvatar, StyledArticle };
