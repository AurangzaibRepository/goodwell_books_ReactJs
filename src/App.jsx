import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home from './components/Home';
import About from './components/About';
import Podcasts from './components/Podcasts';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import Footer from './components/layouts/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id="dv-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:title" element={<BookDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" />
          <Route path="/podcasts" element={<Podcasts />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
