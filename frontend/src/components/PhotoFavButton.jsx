import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import PhotoListItem from './components/PhotoListItem';

function PhotoFavButton() {
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <PhotoListItem />
      </div>
    </div>
  );
}

export default PhotoFavButton;