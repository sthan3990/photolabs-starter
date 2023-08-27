import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  return (
    <div className='fav-badge'>
      <FavIcon
        isLiked={props.favedPhotos.length !== 0 ? true : false}
        displayAlert={props.favedPhotos.length !== 0 ? true : false} />
    </div>
  );
}

export default FavBadge;