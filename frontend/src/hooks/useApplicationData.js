import { useState, createContext } from 'react';

export const FavouritesContext = createContext();

export const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(photoId)
        ? currentFavourites.filter(id => id !== photoId)
        : [...currentFavourites, photoId]
    );
  };

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
    setSimilarPhotos(Array.isArray(photo.similar_photos) ? photo.similar_photos : Object.values(photo.similar_photos || {}));
  };

  return {
    favourites,
    toggleFavourite,
    displayModal,
    setDisplayModal,
    selectedPhoto,
    setSelectedPhoto,
    similarPhotos,
    setSimilarPhotos,
    handlePhotoSelect,
  };
};
