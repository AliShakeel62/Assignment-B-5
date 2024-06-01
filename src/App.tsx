import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Apiwork from './Pages/ApiScreen';

function App() {
  return (
    <div className="App">
     <h1 className='text-primary fw-bold text-center mt-5 flex-wrap'>API Calling</h1>
    <Apiwork/>
    </div>
  );
}

export default App;
