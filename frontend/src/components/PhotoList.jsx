import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  

  return (
    <div className="photo-list">

      {photos.map(photo =>

        <PhotoListItem
          setPhotoData={props.setPhotoData}
          selected={props.selected}
          setSelected={props.setSelected}
          setShowModal={props.setShowModal}
          alert={props.alert}
          setAlert={props.setAlert}
          key={photo.id}
          PhotoData={photo}
          onClick={() => props.setShowModal(true)}
        />

      )}

    </div>
  );
};

export default PhotoList;