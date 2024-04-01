import React, { useContext } from "react";
import { FavouritesContext } from "App";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourited = favourites.includes(photo.id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavourited={isFavourited}
        toggleFavourite={() => toggleFavourite(photo.id)}
      />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo"/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.user.profile} alt="User Profile"/>
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;


