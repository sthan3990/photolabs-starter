import React from 'react';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import "../styles/PhotoListItem.scss";

const PhotoDetailsModal = (props) => {

  const photoData = props.photoData;

  const handeClick = () => {
    props.toggleModal(false);
  }

  return (
    <div className="photo-details-modal">

      <div className="photo-details-modal__top-bar">
        <button
          className="photo-details-modal__close-button"
          onClick={handeClick}
        >
          <img
            src={closeSymbol}
            alt="close symbol"
          />
        </button>
      </div>


      <div className="photo-details-modal__image">
        <img
          src={photoData.urls.full}
        />
    </div>


      <div className="photo-list__user-details">

        <img
          className="photo-list__user-profile"
          src={photoData.user.profile}
        />

        <div className="photo-list__user-info">
          <span>{photoData.user.name}</span>
          <br />
          <span className="photo-list__user-location">{`${photoData.location.city}, ${photoData.location.country}`}</span>
        </div>

      </div>



      <div className="photo-details-modal__header">
        <span className="photo-details-modal__header">Similar Photos</span>
      </div>
      <div className="photo-details-modal__images">

        <PhotoList
          photoId={photoData.photoId}
          setAlert={props.setAlert}
          setSelected={props.setSelected}
          selected={props.selected}
          alert={props.alert}
        />

      </div>

    </div>
  )
};

export default PhotoDetailsModal;
