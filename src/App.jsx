import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="dv-main">
        <Routes>
          <Route path="/" />
          <Route path="/books" />
          <Route path="/about" />
          <Route path="/events" />
          <Route path="/podcasts" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
