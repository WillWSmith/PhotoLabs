import React, { useContext } from 'react';
import { FavouritesContext } from 'hooks/useApplicationData';
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';

const LikedPhotosModal = ({ onClose }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="liked-photos-modal" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
        </button>
        <h2>Liked Photos</h2>
        <PhotoList photos={favourites} />
      </div>
    </div>
  );
};

export default LikedPhotosModal;