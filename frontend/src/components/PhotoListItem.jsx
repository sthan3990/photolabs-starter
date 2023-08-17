import React from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";

const PhotoListItem = (props) => {
  const photoData = props.PhotoListData;

  return (

    <div className="photo-list__item">

      <img className="photo-list__image" src={photoData.imageSource} />

      <div className="photo-list__user-details">
          
          <img className="photo-list__user-profile" src={photoData.profile} />
          
          <div className="photo-list__user-info">
            <span>{photoData.username}</span>
            <br />
            <span className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</span>
          </div>
    
      </div>

    </div>

  );
};

export default PhotoListItem;
