import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const itemData = props.TopicListData;
  console.log(itemData);
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      {itemData.id}
      {itemData.slug}
    </div>
  );
};

export default TopicListItem;
