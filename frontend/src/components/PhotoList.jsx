import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, handlePhotoSelect }) => {
  if (!Array.isArray(photos)) {
    console.log('Photos is not an array', photos);
    return null;
  }
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