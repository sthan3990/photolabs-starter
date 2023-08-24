import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {
  const [alert, setAlert] = useState(false);

  return (
    <div className="home-route">
      <TopNavigation
        selected={props.selected}
        setSelected={props.setSelected}
        alert={alert}
        setAlert={setAlert}
      />
      <PhotoList
        setAlert={setAlert}
        setSelected={props.setSelected}
        selected={props.selected}
        alert={alert}
        setShowModal={props.setShowModal}
        setPhotoData={props.setPhotoData}
      />
    </div>
  );
};

export default HomeRoute;