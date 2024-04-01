import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ isFavourited, toggleFavourite}) {

  return (
    <div className="photo-list__fav-icon" onClick={toggleFavourite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;