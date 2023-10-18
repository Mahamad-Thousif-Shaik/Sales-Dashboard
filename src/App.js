import './App.css';
import React from 'react';
import Sidebar from './components/Siderbar/Siderbar';
import ContentComponent from './components/Content/Content';

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", display:"flex", flexDirection:"row" }}>
      <div className='sidebar-container'>
        <Sidebar />
      </div>
      <div>
        <ContentComponent/>
      </div>
    </div>
  );
}

export default App;
