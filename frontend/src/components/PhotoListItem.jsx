import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = ({ photo, isFavourited, toggleFavourite, setDisplayModal, setSelectedPhoto }) => {

  const handlePhotoClick = () => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        isFavourited={isFavourited}
        toggleFavourite={toggleFavourite}
      />
      <img className="photo-list__image" src={photo.urls.regular} alt="Photo" onClick={handlePhotoClick}/>
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


