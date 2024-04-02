import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ setDisplayModal, photoDetails }) => {
  const closeModal = () => setDisplayModal(false);

  if (!photoDetails || !photoDetails.urls || !photoDetails.user) {
    console.error('No photo details provided to PhotoDetailsModal');
  }
  console.log(photoDetails);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
