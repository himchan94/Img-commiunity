import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.src} />
        </Grid>
        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;

Post.defaultProps = {
  user_info: {
    user_name: "mean0",
    user_profile:
      "https://i.pinimg.com/originals/95/77/3a/95773a62497aadf957fb800b99dae301.jpg",
  },
  image_url:
    "https://i.pinimg.com/originals/95/77/3a/95773a62497aadf957fb800b99dae301.jpg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};
