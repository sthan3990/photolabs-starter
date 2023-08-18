import React, {useState} from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from 'components/TopicList';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge
        selected = {props.selected}
        isFavPhotoExist={props.alert}
      />
    </div>
  )
}

export default TopNavigation;