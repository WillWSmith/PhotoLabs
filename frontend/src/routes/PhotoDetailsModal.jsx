import React, { useContext } from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { FavouritesContext } from 'hooks/useApplicationData';

const PhotoDetailsModal = ({ closePhotoDetails, photoDetails, similarPhotos }) => {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  
  const isMainPhotoFavourited = favourites.includes(photoDetails.id);

  return (
    <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={closePhotoDetails}>
          <img src={closeSymbol} alt="Close" />
        </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton 
          isFavourited={isMainPhotoFavourited}
          toggleFavourite={() => toggleFavourite(photoDetails.id)}
        />
        <img 
          src={photoDetails.urls.full} 
          alt={photoDetails.description || 'Photo description unavailable'} 
          className="photo-details-modal__image" 
        />
      <div className="photo-details-modal__photographer-details">
        <img 
          src={photoDetails.user.profile} 
          alt={`${photoDetails.user.name}'s profile`} 
          className="photo-list__user-profile"
        />
        <div>
          <span className="photo-list__user-info">{photoDetails.user.name}</span>
          <div className="photo-list__user-location">
            {photoDetails.location && (
              <>
                {photoDetails.location.city ? `${photoDetails.location.city}, ` : ''}
                {photoDetails.location.country}
              </>
            )}
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="photo-details-modal__images">Similar Photos</h3>
      
      <div className='photo-details-modal__top-bar'>
        <PhotoList photos={similarPhotos} favourites={favourites} toggleFavourite={toggleFavourite} />
        </div>
    </div>
  );
};

export default PhotoDetailsModal;


