import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topics = props.TopicData;

  const topicItem = topics.map(topic =>
    <li key={topic.id}>
      <div className="topic-list__item">
        <span>{topic.title}</span>
      </div>
    </li>

  );

  return (
    <ul>
      {topicItem}
    </ul>
  );
};

export default TopicListItem;
