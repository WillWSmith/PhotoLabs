import React from "react";

import "../styles/PhotoListItem.scss";


const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

const PhotoListItem = () => {
  return (
    <>
    <img src={sampleDataForPhotoListItem.imageSource} alt="Photo"/>
    <div>
    <img src={sampleDataForPhotoListItem.profile}/>
    <h3>{sampleDataForPhotoListItem.username}</h3>
    <p>{sampleDataForPhotoListItem.location.city}, {sampleDataForPhotoListItem.location.country}</p>
    </div>
    </>
  )
};

export default PhotoListItem;
