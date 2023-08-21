import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const photo = props.PhotoData;

  const handeClick = () => {
    props.onClick(true);
    props.setPhotoData(photo);
  }
  return (

    <div className="photo-list__item" key={photo.id} onClick={handeClick}>

      <PhotoFavButton
        selected={props.selected}
        setSelected={props.setSelected}
        alert={props.alert}
        setAlert={props.setAlert}
      />

      <img
        className="photo-list__image"
        src={photo.urls.full}
      />

      <div className="photo-list__user-details">

        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
        />

        <div className="photo-list__user-info">
          <span>{photo.user.name}</span>
          <br />
          <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
        </div>

      </div>

    </div>

  );
};

export default PhotoListItem;
