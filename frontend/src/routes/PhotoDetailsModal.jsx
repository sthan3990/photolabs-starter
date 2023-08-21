import React from 'react';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss'


const PhotoDetailsModal = (props) => {

  const photoData = props.photoData;

  const handeClick = () => {
    props.toggleModal(false);
  }

  return (
    <div className="photo-details-modal">


      <button
        className="photo-details-modal__close-button"
        onClick={handeClick}
      >
        <img
          src={closeSymbol}
          alt="close symbol"
        />
      </button>

      <img
        className="photo-details-modal__image"
        src={photoData.urls.full}
      />

      <div className="photo-details-modal__header">

        <span className="photo-details-modal__header">Similar Photos</span>
      </div>
      <div className="photo-details-modal__images">

        <PhotoList />

      </div>

    </div>
   )
};

export default PhotoDetailsModal;
