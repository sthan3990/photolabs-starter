import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const { newTopic, topic } = props; // Corrected destructuring

  const newTopicHandler = () => {
    newTopic(topic);
  };

  return (
    <div className="topic-list__item" onClick={newTopicHandler}> 
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
