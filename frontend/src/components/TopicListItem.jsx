import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const topics = props.TopicData;

  const topicItem = topics.map(topic =>

    <li key={topic.id}>
        <span>{topic.title}</span>
     </li>

  );

  return (
    <ul className="topic-list__item">
      {topicItem}
    </ul>
  );
};

export default TopicListItem;
