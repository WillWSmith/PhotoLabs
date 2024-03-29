import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={photo.imageSource} alt="Photo"/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={photo.profile} alt="User Profile"/>
        <div className="photo-list__user-info">
          <h3>{photo.username}</h3>
          <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;

