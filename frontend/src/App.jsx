import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import photos from 'mocks/photos';
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
    setDisplayModal,
    selectedPhoto,
    similarPhotos,
    handlePhotoSelect,
  } = useApplicationData();

  return (
    <FavouritesProvider favourites={favourites} toggleFavourite={toggleFavourite}>
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


