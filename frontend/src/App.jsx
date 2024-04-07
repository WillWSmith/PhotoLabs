import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import { useApplicationData, FavouritesContext } from 'hooks/useApplicationData';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import LikedPhotosModal from 'routes/LikedPhotosModal';

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
    topicData,
    selectTopic,
    toggleLikedPhotosModal,
    showLikedPhotos,
  } = useApplicationData();

  const closePhotoDetails = () => {
    dispatch({ type: 'DISPLAY_PHOTO_DETAILS', payload: false });
  };

  return (
    <FavouritesContext.Provider value={{
      favourites,
      toggleFavourite,
      displayModal,
      selectedPhoto,
      similarPhotos,
      handlePhotoSelect,
      dispatch,
      photoData,
      topicData,
      selectTopic,
      toggleLikedPhotosModal,
      showLikedPhotos
    }}>
      <div className="App">
        <HomeRoute
          photos={photoData}
          topics={topicData}
          handlePhotoSelect={handlePhotoSelect}
          selectTopic={selectTopic}
        />
        {showLikedPhotos && <LikedPhotosModal onClose={() => toggleLikedPhotosModal()} />}
        {displayModal && <div className="modal-backdrop" onClick={closePhotoDetails} />} 
        {displayModal && selectedPhoto && (
          <PhotoDetailsModal
            photoDetails={selectedPhoto}
            closePhotoDetails={closePhotoDetails}
            similarPhotos={similarPhotos}
          />
        )}
      </div>
    </FavouritesContext.Provider>
  );
};

export default App;