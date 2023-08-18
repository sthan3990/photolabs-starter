import React from "react";
import photos from "mocks/photos";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";


const PhotoList = () => {

  return (
    <div className="photo-list">

      {photos.map(photo =>
      
        <PhotoListItem
          key={photo.id}
          PhotoData={photo}
        />

      )}

    </div>
  );
};

export default PhotoList;
