import { useState } from 'react';
import mockPhotoData from "mocks/photos";

const useApplicationData = () => {
  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [selected, setSelected] = useState([]);
  const [alert, setAlert] = useState(false);

  const updateToFavPhotoIds = (alert) => {
    setShowModal(true); // Open the photo details modal

  };

  // Action to set selected photo
  const setPhotoSelected = (photo) => {
    if (photo) {
      setPhotoData(photo);  
      setSelected([photo.id]);  
      setShowModal(true);  
    } else {
      setPhotoData(null);
      setSelected([]); 
      setShowModal(false);  
    }
  };

  const onClosePhotoDetailsModal = () => {
    setShowModal(false);
    setPhotoData(null);
  };

  // Return the state and actions as an object
  return {
    showModal,
    setShowModal,
    photoData,
    setPhotoData,
    selected,
    setSelected,
    alert,
    setAlert,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;