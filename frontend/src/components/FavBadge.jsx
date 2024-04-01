import React, {useContext} from 'react';
import { FavouritesContext } from '../App';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { favourites } = useContext(FavouritesContext);

  const isFavPhotoExist = favourites.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

export default FavBadge;