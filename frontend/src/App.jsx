import React from 'react';

import './App.scss';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <TopNavigation />
      
      <HomeRoute/>

    </div>
  );
};

export default App;
