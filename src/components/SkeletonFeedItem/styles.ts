import Stack, { StackProps } from "@mui/material/Stack";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import { styled } from "@mui/material/styles";

const StyledStack = styled(Stack)<StackProps>(() => ({
  display: "flex",
  flexDirection: "row",
}));

const AvatarSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  margin: 10,
}));

const TextSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  marginBottom: 5,
}));

const StyledDiv = styled("div")(() => ({
  display: "flex",
}));

const StyledSection = styled("section")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
}));

const IconSkeleton = styled(Skeleton)<SkeletonProps>(() => ({
  margin: 5,
}));

export {
  StyledStack,
  AvatarSkeleton,
  TextSkeleton,
  StyledDiv,
  StyledSection,
  IconSkeleton,
};
