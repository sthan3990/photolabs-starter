import React from 'react';
import PhotoFavButton from 'components/PhotoFavButton';

import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = (props) => {
  const photoData = props.photoData;

  const handeClick = () => {
    props.toggleModal(false);
    setPhotoSelected(null);
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

      {photoData && (
        <div className="photo-details-modal__images">
          <div className="photo-details-image-container">
            <PhotoFavButton
              photoId={photoData.id + 1}
              selected={props.selected}
              setSelected={props.setSelected}
              alert={props.alert}
              setAlert={props.setAlert}
            />

            <img
              src={photoData.urls.full}
              onClick={handeClick}
              style={{
                maxWidth: '90%', /* Adjust as needed */
                borderRadius: '8px',
                margin: '0 auto',
              }}
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
              <span className="photo-list__user-location">
                {`${photoData.location.city}, ${photoData.location.country}`}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="photo-details-modal__images">
        <br />
        <span className="photo-details-modal__header">Related Photos</span>
        <PhotoList
          setAlert={props.setAlert}
          setSelected={props.setSelected}
          selected={props.selected}
          alert={props.alert}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;