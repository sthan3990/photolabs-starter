import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {favedPhotos} = props;
  return (
    <div className='fav-badge'>
      <FavIcon
        isLiked={favedPhotos.length !== 0 ? true : false}
        displayAlert={favedPhotos.length !== 0 ? true : false} />
    </div>
  );
}

export default FavBadge;