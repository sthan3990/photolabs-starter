import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  const [alert, setAlert] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <div className="home-route">
      <TopNavigation
        selected={selected}
        alert={alert}
      />
      <PhotoList
        alert={alert}
        setSelected={setSelected}
        setAlert={setAlert}
      />
    </div>
  );
};

export default HomeRoute;