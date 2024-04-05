import { createContext, useReducer, useEffect } from 'react';

export const FavouritesContext = createContext();

const initialState = {
  favourites: [],
  displayModal: false,
  selectedPhoto: null,
  similarPhotos: [],
  photoData: [],
  topicData: [],
  selectedTopic: null,
};

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_SIMILAR_PHOTOS: 'SET_SIMILAR_PHOTOS',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
};



//Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favourites: state.favourites.includes(action.payload)
          ? state.favourites
          : [...state.favourites, action.payload],
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favourites: state.favourites.filter((id) => id !== action.payload),
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload,
      };
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return {
          ...state,
          displayModal: action.payload,
        };
      case ACTIONS.SET_SIMILAR_PHOTOS:
        return {
          ...state,
          similarPhotos: action.payload,
        };
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
        return {
          ...state,
          selectedTopic: action.payload,
        };
      default:
        throw new Error(`Unsupported action type: ${action.type}`);
  }
}

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
//API Photo Fetch

  useEffect(() => {
    fetch('/api/photos')
    .then(res => res.json())
    .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    .catch(error => console.error('Error Fetching Photos:', error))
  }, [])

  useEffect(() => {
    fetch('/api/topics')
    .then(res => res.json())
    .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
    .catch(error => console.error('Error Fetching Topics:', error))
  }, [])

  useEffect(() => {
    fetch(`/api/topics/photos/:topic_id`)
    .then(res => res.json())
    .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
    .catch(error => console.error('Error Fetching Photos by Topic:', error))
  }, [state.selectedTopic])

  const toggleFavourite = (photoId) => {
    const actionType = state.favourites.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
    dispatch({ type: actionType, payload: photoId });
  };

  const handlePhotoSelect = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: true });
    dispatch({ 
      type: ACTIONS.SET_SIMILAR_PHOTOS, 
      payload: Array.isArray(photo.similar_photos) ? photo.similar_photos : Object.values(photo.similar_photos || {}) 
    });
  };

  return {
    ...state,
    toggleFavourite,
    handlePhotoSelect,
    dispatch,
  };
};
