import { useReducer, useEffect } from 'react';
import axios from 'axios';

// initial states
const initialState = {
  photos: [],
  topics: [],
  currentTopic: null,
  favedPhotos: [],
  modalPhoto: {},
  modalActive: false,
}

const ACTIONS = {
  MODAL_TOGGLER: 'MODAL_TOGGLER',
  FAV_TOGGLER: 'FAV_TOGGLER',
  UPDATE_PHOTO_DATA: 'UPDATE_PHOTO_DATA',
  CHOOSE_NEW_TOPIC: 'CHOOSE_NEW_TOPIC',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
}

const dataURL = "http://localhost:8001";

const reducer = (state, action) => {

  const addFave = (photo) => {
    const newList = [
      ...state.favedPhotos,
      photo
    ];
    return newList;
  };

  const delFave = (photo) => {
    const newList = state.favedPhotos.filter((element) => {
      return (element !== photo);
    });
    return newList;
  };

  // retrieve current state..

  const newState = { ...state };

  // update state depending on action..

  switch (action.type) {
    case ACTIONS.MODAL_TOGGLER:
      newState.modalActive = action.payload;
      break;

    case ACTIONS.UPDATE_PHOTO_DATA:
      newState.modalPhoto = action.payload;
      break;

    case ACTIONS.FAV_TOGGLER:
      const isFav = state.favedPhotos.findIndex(photo => photo.id === action.payload.id)
      if (isFav !== -1) {
        newState.favedPhotos = delFave(action.payload);
      } else {
        newState.favedPhotos = addFave(action.payload);
      }
      break;

    case ACTIONS.SEARCH_FOR_FAVS:
      if (action.payload !== undefined) {
        newState.favedPhotos = state.favedPhotos.includes(action.payload);
      } else {
        if (state.favedPhotos.length === 0) {
          newState.favedPhotos = false;
        } else {
          newState.favedPhotos = true;
        }
      };
      break;

    case ACTIONS.SET_PHOTO_DATA:
      newState.photos = action.payload;
      break;

    case ACTIONS.CHOOSE_NEW_TOPIC:
      newState.currentTopic = action.payload;
      break;

    case ACTIONS.SET_TOPIC_DATA:
      newState.topics = action.payload;
      break;

    default:
      console.log(`Error trying to ${action.type}`)
      break;
  }

  // update with new state..
  return newState;
};

export default function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, initialState);

  // Both fetch operation in one useFfect
  useEffect(() => {
    const fetchData = async () => {
      const [photosResponse, topicsResponse] = await Promise.all([
        axios.get(`${dataURL}/api/photos`),
        axios.get(`${dataURL}/api/topics`)
      ]);

      dispatch({ type: 'SET_PHOTO_DATA', payload: photosResponse.data });
      dispatch({ type: 'SET_TOPIC_DATA', payload: topicsResponse.data });
    };

    fetchData();

  }, []);

  // Updates the photo data when the currentTopic changes.
  useEffect(() => {
    if (state.currentTopic !== null) {
      const fetchTopicPhotos = async () => {
        console.log(state.currentTopic.id );

        const topicPhotosResponse = await axios.get(`${dataURL}/api/topics/photos/${state.currentTopic.id}`);
        console.log(topicPhotosResponse.data );
        dispatch({ type: "SET_PHOTO_DATA", payload: topicPhotosResponse.data });
      };

      fetchTopicPhotos();
    }
  }, [state.currentTopic]);

  const modalToggler = (photo) => {
    if (state.modalActive) return;
    dispatch({ type: 'UPDATE_PHOTO_DATA', payload: photo })
    dispatch({ type: 'MODAL_TOGGLER', payload: !state.modalActive });
  };

  const favToggler = (photo) => {
    dispatch({ type: 'FAV_TOGGLER', payload: photo });
  };

  const onCloseModal = () => {
    dispatch({ type: 'MODAL_TOGGLER', payload: false })
  };

  const newTopic = (topic) => {
    dispatch({ type: 'CHOOSE_NEW_TOPIC', payload: topic });
  };

  return {
    state,
    modalToggler,
    favToggler,
    onCloseModal,
    newTopic,
  };
}