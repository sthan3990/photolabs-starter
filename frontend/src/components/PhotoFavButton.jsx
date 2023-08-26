import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const { setSelected, selected, photoId } = props;

  const isSelected = selected.includes(photoId);

  const handleSelect = () => {

    if (isSelected) {
      // If the clicked favicon is already selected, remove it
      setSelected(prevSelected => prevSelected.filter(id => id !== photoId));
    } else {
      setSelected(prevSelected => [...prevSelected, photoId]);
    }
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={isSelected}
          onClick={handleSelect}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;