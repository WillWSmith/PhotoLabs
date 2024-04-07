import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import { FavouritesContext } from 'hooks/useApplicationData';

const FavBadge = ({ isFavPhotoExist }) => {
  const { toggleLikedPhotosModal } = useContext(FavouritesContext);

  return (
    <div className='fav-badge' onClick={toggleLikedPhotosModal}>
      <FavIcon displayAlert={isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;