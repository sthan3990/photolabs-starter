import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {

  const {newTopic, topics} = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) =>
    
      <TopicListItem
        key={topic.id}
        topic={topic}
        newTopic={newTopic}
      />
      )}
    </div>
  );
};

export default TopicList;
