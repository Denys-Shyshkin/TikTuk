import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { StyledDiv, StyledTypography } from "./styles";

type Props = {
  nickName?: any;
  text: any;
  hashtags?: any;
  onClick?: any;
};

const PostHeader = ({ nickName, text, hashtags, onClick }: Props) => {
  const hashtagsString = hashtags?.map((tag: any) => {
    return (
      <Typography id={tag.id} display="inline" variant="subtitle2">
        <Link href="#" underline="none" color="black">
          #{tag.name}&nbsp;
        </Link>
      </Typography>
    );
  });

  return (
    <>
      {nickName && (
        <StyledTypography variant="subtitle1" onClick={onClick}>
          {nickName}
        </StyledTypography>
      )}
      <Typography variant="body2">{text}</Typography>
      {hashtagsString && <StyledDiv>{hashtagsString}</StyledDiv>}
    </>
  );
};

export default PostHeader;
