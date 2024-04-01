import React, { useContext } from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import { FavouritesContext } from 'App';

const HomeRoute = ({topics, photos}) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} favourites={favourites} toggleFavourite={toggleFavourite}/>
    </div>
  );
};

export default HomeRoute;
