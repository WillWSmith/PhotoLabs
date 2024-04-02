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

  return (
    <FavouritesProvider>
    <div className="App">
      <PhotoDetailsModal />
      <HomeRoute photos={photos} topics={topics} />
    </div>
    </FavouritesProvider>
  );
};

export default App;
