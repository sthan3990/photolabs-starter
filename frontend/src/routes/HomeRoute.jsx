import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const [alert, setAlert] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation
        selected={selected}
        alert={alert}
        setSelected={setSelected}
        setAlert={setAlert}
      />
      <PhotoList
        setAlert={setAlert}
        setSelected={setSelected}
        selected={selected}
        alert={alert}
        setShowModal={props.setShowModal}
        setPhotoData={props.setPhotoData}
      />
    </div>
  );
};

export default HomeRoute;