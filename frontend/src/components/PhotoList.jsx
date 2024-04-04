import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, handlePhotoSelect }) => {

  const isFavourited = (photoId) => favourites ? favourites.includes(photoId) : false;

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          isFavourited={isFavourited(photo.id)}
          toggleFavourite={toggleFavourite ? () => toggleFavourite(photo.id) : undefined} 
          handlePhotoSelect={handlePhotoSelect}
        />
      ))}
    </ul>
  );
};

export default PhotoList;