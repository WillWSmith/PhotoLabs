import React from 'react';
import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      {/* {photos.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))} */}
      <PhotoList/>
    </div>
  );
};

export default App;
