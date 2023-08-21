import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [showModal, setShowModal] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  return (
    <div className="App">
      <HomeRoute
        setShowModal={setShowModal}
        setPhotoData={setPhotoData}
      />
      {
        showModal ? <PhotoDetailsModal photoData={photoData} toggleModal={setShowModal} /> : null
      }
    </div>
  );
};

export default App;
