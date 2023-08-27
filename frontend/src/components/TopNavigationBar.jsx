import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {

  const {topics, newTopic, favedPhotos} = props;

  const topicResetHandler = () => {
    newTopic(null);
  };

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={topicResetHandler}>PhotoLabs</span>

      <span className="top-nav-topics">
        <TopicList
          topics={topics}
          newTopic={newTopic}
        />
        <FavBadge
          favedPhotos={favedPhotos}
        />

      </span>
    </div>
  );
};

export default TopNavigation;