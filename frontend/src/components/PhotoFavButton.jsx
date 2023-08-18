import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import FavBadge from './FavBadge';

function PhotoFavButton(props) {

  const [favIcon, setState] = useState("off");

  const handleClick = () => {
    setState(setState === "on" ? "off" : "on");
  }
  
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          onClick={() => handleClick()}

        />
      </div>
    </div>
  );
}

export default PhotoFavButton;