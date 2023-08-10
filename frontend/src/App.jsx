import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from 'components/TopicList';
const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photos = new Array(3);
  
  return (
    <div className="App">
      <PhotoListItem 
         PhotoListData = {sampleDataForPhotoListItem}
      />
      <TopicList />

    </div>
  );
};

export default App;
