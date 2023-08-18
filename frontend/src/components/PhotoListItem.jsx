import React from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";

const PhotoListItem = (props) => {

  // Create array
  const photos = props.PhotoData;

  // Show only three items
  const photoItem = photos.slice(0,3).map(photo =>
  <li key={photo.id} className="photo-list" >
    <div className="photo-list__item">

      <div>
        <img className="photo-list__image" src={photo.urls.full} />
      </div>

      <div className="photo-list__user-details">

        <img className="photo-list__user-profile" src={photo.user.profile} />
        

        <div className="photo-list__user-info">
          <span>{photo.username}</span>
          <br />
          <span className="photo-list__user-location">{`${photo.location.city}, ${photo.location.country}`}</span>
        </div>

      </div>
    </div>
    </li>
  );

  return (
    <ul>
      {photoItem}
    </ul>
  );
};

export default PhotoListItem;
