import React from 'react';
import PhotoList from 'components/PhotoList';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setDisplayModal, photoDetails, similarPhotos }) => {
  const closeModal = () => setDisplayModal(false);
  const similarPhotosArray = Array.isArray(similarPhotos) ? similarPhotos : Object.values(similarPhotos || {});

  return (
<div className="photo-details-modal">
  <div className="photo-details-modal__top-bar">
    <button className="photo-details-modal__close-button" onClick={closeModal}>
      <img src={closeSymbol} alt="Close" />
    </button>
  </div>
  <img 
    className="photo-details-modal__image" 
    src={photoDetails.urls.full} 
    alt={photoDetails.description || 'Photo description unavailable'} 
  />
  <div className="photo-details-modal__photographer-details">
    
    <img 
      src={photoDetails.user.profile} 
      alt={`${photoDetails.user.name}'s profile`} 
      className="photo-details-modal__photographer-profile"
    />
    <div>
      <div className="photo-details-modal__photographer-info">{photoDetails.user.name}</div>
      {photoDetails.location.city && (
        <div className="photo-details-modal__photographer-location">
          {photoDetails.location.city ? `${photoDetails.location.city}, ` : ''}
          {photoDetails.location.country}
        </div>
      )}
    </div>
  </div>

  <h3 className="photo-details-modal__header">Similar Photos</h3>
  <div className="photo-details-modal__images">
    <PhotoList photos={similarPhotosArray} />
  </div>
</div>
  );
};

export default PhotoDetailsModal;



