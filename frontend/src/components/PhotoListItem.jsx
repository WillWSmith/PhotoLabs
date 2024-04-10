import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = ({ photo, isFavourited, toggleFavourite, handlePhotoSelect }) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavourited={isFavourited}
        toggleFavourite={() => toggleFavourite(photo.id)}
      />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt="Photo"
        onClick={() => handlePhotoSelect(photo)}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt={`${photo.user.name}'s profile`}
        />
        <div className="photo-list__user-info">
          <div>{photo.user.name}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;



