import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const topicResetHandler = () => {
    props.newTopic(null);
  };

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={topicResetHandler}
      >PhotoLabs</span>
      <span className="top-nav-topics">
        < TopicList
          topics={props.topics}
          newTopic={props.newTopic}
        />
        < FavBadge
          favedPhotos={props.favedPhotos}
        />
      </span>
    </div>
  );
};

export default TopNavigation;