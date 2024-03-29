import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton/>
      <img className="photo-list__image" src={photo.imageSource} alt="Photo"/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt="User Profile"/>
        <div className="photo-list__user-info">
          <div>{photo.username}</div>
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;


