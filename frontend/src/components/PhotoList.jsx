import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          photo={photo} 
          isFavourited={favourites.includes(photo.id)}
          toggleFavourite={() => toggleFavourite(photo.id)}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
