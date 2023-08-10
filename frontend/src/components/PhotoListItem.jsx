import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const photoData = props.PhotoListData;

  return (

    <div className="photo-list_item">

      <img className="photo-list__image" src={photoData.imageSource} />

      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photoData.profile} />
        <h2 className="photo-list_user-info">{photoData.username}</h2>
        <h3 className="photo-list_user-location">{photoData.location.city}</h3>
      </div>

    </div>

  );
};

export default PhotoListItem;
