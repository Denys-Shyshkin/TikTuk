import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";

import { MEDIA_QUERY } from "../../constants";
import { StyledDiv, StyledSection, StyledTypography } from "./styles";

type Props = {
  nickName?: any;
  text: any;
  hashtags?: any;
  onClick?: any;
};

const PostHeader = ({ nickName, text, hashtags, onClick }: Props) => {
  const matches = useMediaQuery(MEDIA_QUERY);

  const hashtagsString = hashtags?.map((tag: any) => {
    return (
      <Typography key={tag.id} display="inline" variant="subtitle2">
        <Link href="#" underline="none" color="black">
          #{tag.name + " "}
        </Link>
      </Typography>
    );
  });

  return (
    <StyledDiv isMobile={matches}>
      {nickName && (
        <StyledTypography variant="subtitle1" onClick={onClick}>
          {nickName}
        </StyledTypography>
      )}
      <Typography variant="body2">{text}</Typography>
      {hashtagsString && <StyledSection>{hashtagsString}</StyledSection>}
    </StyledDiv>
  );
};

export default PostHeader;
