import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, isFavPhotoExist, selectTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} selectTopic={selectTopic}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  );
};

export default TopNavigation;