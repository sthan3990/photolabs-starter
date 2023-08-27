import React from 'react';

 import '../styles/PhotoFavButton.scss';

 import FavIcon from '../components/FavIcon';


const PhotoFavButton = (props) => {

  const {likeToggler, favedPhotos} = props;

  const toggler = () => {
    likeToggler(props.photo);
  };

  const isLiked = favedPhotos.find(photo => photo.id === props.photo.id);

  return (
    <div className="photo-list__fav-icon" onClick={toggler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          isLiked={isLiked}
        />
      </div>
    </div>
  );

};

export default PhotoFavButton;