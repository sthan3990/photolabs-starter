import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = (props) => {

  const photoData = props.photoData;

  const handeClick = () => {
    props.toggleModal(false);
  }

  console.log(props);

  return (
    <div className="photo-details-modal"
      onClick={handeClick} >
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
  )
};

export default PhotoDetailsModal;
