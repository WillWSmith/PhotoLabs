import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = ({photo}) => {
  return (
    <>
    <img src={photo.imageSource} alt="Photo"/>
    <div>
    <img src={photo.profile}/>
    <h3>{photo.username}</h3>
    <p>{photo.location.city}, {photo.location.country}</p>
    </div>
    </>
  )
};

export default PhotoListItem;
