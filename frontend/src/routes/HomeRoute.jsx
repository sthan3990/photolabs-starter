import React, { useState } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';


const HomeRoute = () => {
  const [alert, setAlert] = useState(false);

  return (
    <div className="home-route">
      <TopNavigation
        alert={alert}
        setAlert={setAlert}
      />
      <PhotoList
        alert={alert}
        setAlert={setAlert}
      />
    </div>
  );
};

export default HomeRoute;
