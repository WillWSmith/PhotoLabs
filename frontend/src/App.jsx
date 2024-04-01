import React from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <TopNavigationBar/>
      <PhotoList/>
    </div>
  );
};

export default App;
