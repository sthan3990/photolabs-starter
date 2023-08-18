import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from 'components/TopicList';

const TopNavigation = (props) => {

  const handleSelect = () => {
    console.log(props.alert);
    props.setAlert(props.alert === false ? true : false);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge
        isFavPhotoExist={props.alert}
        onClick={handleSelect}
      />
    </div>
  )
}

export default TopNavigation;