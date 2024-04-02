import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import { useState, createContext, useContext } from 'react';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (photoId) => {
    setFavourites((currentFavourites) =>
      currentFavourites.includes(photoId)
        ? currentFavourites.filter(id => id !== photoId)
        : [...currentFavourites, photoId]
    );
  };

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [similarPhotos, setSimilarPhotos] = useState([]);

  const handlePhotoSelect = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
    setSimilarPhotos(Array.isArray(photo.similar_photos) ? photo.similar_photos : Object.values(photo.similar_photos || {}));
  };

  return (
    <FavouritesProvider>
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          setDisplayModal={setDisplayModal}
          setSelectedPhoto={handlePhotoSelect}
        />
        {displayModal && <div className="modal-backdrop" onClick={() => setDisplayModal(false)} />} 
        {displayModal && selectedPhoto && (
          <PhotoDetailsModal
            photoDetails={selectedPhoto}
            setDisplayModal={setDisplayModal}
            similarPhotos={similarPhotos}
          />
        )}
      </div>
    </FavouritesProvider>
  );
};

export default App;

