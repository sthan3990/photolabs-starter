import React, { useState } from 'react';

import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from 'components/TopicList';

const TopNavigation = (props) => {

  const { selected } = props;

  const isFavPhotoExist = selected.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      {
        selected.length === 0 ?
          <FavBadge
            selected={!selected}
            isFavPhotoExist={isFavPhotoExist}
          /> :
          <FavBadge
            selected={selected}
            isFavPhotoExist={!!isFavPhotoExist}
          />
      }
    </div>
  )
}

export default TopNavigation;