import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
    <DrawerAppBar />
    <section className="mainContainer">
      <Routes>
      <Route path='/home' element={ <HomePage/>}/>
      <Route path="*" element={<Navigate replace to="/" />} />

      </Routes>
    </section>
    </BrowserRouter>
    
  );
}

export default App;
