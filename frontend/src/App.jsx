import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import { FavouritesContext, useApplicationData } from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const FavouritesProvider = ({ children, favourites, toggleFavourite }) => {
  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

const App = () => {
  const {
    favourites,
    toggleFavourite,
    displayModal,
    selectedPhoto,
    similarPhotos,
    handlePhotoSelect,
    dispatch,
    photoData,
  } = useApplicationData();

  const closePhotoDetails = () => {
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: false });
  };

  return (
    <FavouritesProvider favourites={favourites} toggleFavourite={toggleFavourite}>
      <div className="App">
        <HomeRoute
          photos={photoData}
          topics={topics}
          handlePhotoSelect={handlePhotoSelect}
        />
        {displayModal && <div className="modal-backdrop" onClick={closePhotoDetails} />} 
        {displayModal && selectedPhoto && (
          <PhotoDetailsModal
            photoDetails={selectedPhoto}
            closePhotoDetails={closePhotoDetails}
            similarPhotos={similarPhotos}
          />
        )}
      </div>
    </FavouritesProvider>
  );
};

export default App;



