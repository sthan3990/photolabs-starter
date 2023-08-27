import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = ({ photo, favedPhotos, modalToggler, likeToggler }) => {

  const { urls, user, location } = photo;


  const modalToggleHandler = () => {
    modalToggler(photo);
  };

  return (
    <div className={"photo-list__item"}>
      <PhotoFavButton
        photo={photo}
        favedPhotos={favedPhotos}
        likeToggler={likeToggler}
      />
      <img 
        onClick={modalToggleHandler} 
        className="photo-list__image" 
        src={photo.urls.regular}>
      </img>

      <div className="photo-list__user-info">
        <img 
          className="photo-list__user-profile" 
          src={photo.user.profile}>
          </img>
        <div>
          <div>
            {photo.user.name}
          </div>
          <div className={"photo-list__user-location"}>
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;