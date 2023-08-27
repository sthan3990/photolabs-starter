import React from 'react';
import PhotoFavButton from '../components/PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  const { photo, favedPhotos, modalToggler, likeToggler } = props;
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
        src={urls.regular}>
      </img>

      <div className="photo-list__user-info">
        <img 
          className="photo-list__user-profile" 
          src={user.profile}>
          </img>
        <div>
          <div>
            {user.name}
          </div>
          <div className={"photo-list__user-location"}>
            {location.city}, {location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;