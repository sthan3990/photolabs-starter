import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  return (
    <div className="photo-list">

      {photos.map(photo =>

        <PhotoListItem
          setSelected={props.setSelected}
          alert={props.alert}
          setAlert={props.setAlert}
          key={photo.id}
          PhotoData={photo}
        />

      )}

    </div>
  );
};

export default PhotoList;
