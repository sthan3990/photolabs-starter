import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {

  return (
    <div >
      <TopicListItem
        TopicData={topics}
      />
    </div>
  );
};

export default TopicList;
