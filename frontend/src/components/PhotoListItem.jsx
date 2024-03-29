import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <>
    <img src={props.imageSource} alt="Photo"/>
    <div>
    <img src={props.profile}/>
    <h3>{props.username}</h3>
    <p>{props.location.city}, {props.location.country}</p>
    </div>
    </>
  )
};

export default PhotoListItem;
