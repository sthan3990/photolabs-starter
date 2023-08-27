import React from 'react';
import PhotoList from '../components/PhotoList';
import TopNavigation from '../components/TopNavigationBar';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const {
    photos,
    topics,
    newTopic, 
    favedPhotos,
    likeToggler,
    modalToggler 
  } = props;

  return (
    <div>
      <TopNavigation
        photos={photos}
        topics={topics}
        newTopic={newTopic}
        favedPhotos={favedPhotos}
      />
      <PhotoList
        photos={photos}
        favedPhotos={favedPhotos}
        likeToggler={likeToggler}
        modalToggler={modalToggler}
      />
    </div>
  );
};

export default HomeRoute;