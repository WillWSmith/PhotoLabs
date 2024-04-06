import React, { useContext } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import { FavouritesContext } from 'hooks/useApplicationData';

const HomeRoute = ({topics, photos, handlePhotoSelect, selectTopic}) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const favouriteExists = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar 
      topics={topics} 
      isFavPhotoExist={favouriteExists}
      selectTopic={selectTopic}
      />
      <div className="home-route__photo-list">
      <PhotoList 
      photos={photos} 
      favourites={favourites} 
      toggleFavourite={toggleFavourite} 
      handlePhotoSelect={handlePhotoSelect}/>
      </div>
    </div>
  );
};

export default HomeRoute;
