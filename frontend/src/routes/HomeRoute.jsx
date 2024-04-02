import React, { useContext } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import { FavouritesContext } from 'App';

const HomeRoute = ({topics, photos, setDisplayModal}) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const favouriteExists = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={favouriteExists}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite} setDisplayModal={setDisplayModal}/>
    </div>
  );
};

export default HomeRoute;
