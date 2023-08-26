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
        setShowModal={setShowModal}
        setPhotoData={setPhotoData}
        setSelected={setSelected}
        selected={selected}
      />
      {
        showModal ? <PhotoDetailsModal setSelected={setSelected}
          selected={selected} photoData={photoData} toggleModal={setShowModal} /> : null
      }
    </div>
  );
};

export default App;
