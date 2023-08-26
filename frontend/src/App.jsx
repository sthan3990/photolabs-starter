import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = (props) => {

  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [selected, setSelected] = useState([]);
  const [alert, setAlert] = useState(false);
 
  return (
    <div className="App">
      <HomeRoute
        alert={alert}
        setAlert={setAlert}
        photoData={photoData}
        setPhotoData={setPhotoData}
        selected={selected}
        setSelected={setSelected}
        setShowModal={setShowModal}
      />
      {
        showModal ?
          <PhotoDetailsModal
            selected={selected}
            setSelected={setSelected}
            photoData={photoData}
            setPhotoData={setPhotoData}
            toggleModal={setShowModal} /> : null
      }
    </div>
  );
};

export default App;
