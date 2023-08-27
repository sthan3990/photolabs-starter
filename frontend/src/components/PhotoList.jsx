import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({photos, modalToggler, favedPhotos, likeToggler}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) =>
        <PhotoListItem
          key={index}
          photo={photo}
          favedPhotos={favedPhotos}
          likeToggler={likeToggler}
          modalToggler={modalToggler}
        />
      )}
    </ul>
  );
};

export default PhotoList;