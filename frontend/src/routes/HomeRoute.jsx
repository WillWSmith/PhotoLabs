import React, { useContext } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import { FavouritesContext } from 'hooks/useApplicationData';

const HomeRoute = ({topics, photos, handlePhotoSelect}) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const favouriteExists = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favouriteExists}/>
      <PhotoList 
      photos={photos} 
      favourites={favourites} 
      toggleFavourite={toggleFavourite} 
      handlePhotoSelect={handlePhotoSelect}/>
    </div>
  );
};

export default HomeRoute;
