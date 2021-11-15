import Avatar, { AvatarProps } from "@mui/material/Avatar";
import Card, { CardProps } from "@mui/material/Card";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import CardContent, { CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

import { colors } from "../../constants";

const StyledCard = styled(Card)<CardProps>(() => ({
  width: 360,
  height: "fit-content",
  marginTop: 100,
  marginLeft: "auto",
  marginRight: "auto",
}));

const SpinnerCard = styled(Card)<CardProps>(() => ({
  width: 360,
  marginTop: 100,
  height: 220,
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledProgress = styled(CircularProgress)<CircularProgressProps>(() => ({
  color: colors.secondary,
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

const StyledCardContent = styled(CardContent)<CardContentProps>(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const StyledArticle = styled("article")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
}));

export {
  StyledCard,
  SpinnerCard,
  StyledProgress,
  StyledSection,
  StyledAvatar,
  StyledCardContent,
  StyledArticle,
};
