import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    props.setAlert(props.alert === false ? true : false);
    setSelected(selected === false ? true : false)
    props.setSelected(selected === false ? true : false)
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selected}
          onClick={handleSelect}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;