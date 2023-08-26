import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <TopNavigation
        selected={props.selected}
        setSelected={props.setSelected}
        alert={props.alert}
        setAlert={props.setAlert}
      />
      <PhotoList
        setSelected={props.setSelected}
        selected={props.selected}
        alert={props.alert}
        setAlert={props.setAlert}
        setShowModal={props.setShowModal}
        setPhotoData={props.setPhotoData}
      />
    </div>
  );
};

export default HomeRoute;