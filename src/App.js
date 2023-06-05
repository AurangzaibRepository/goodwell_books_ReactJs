import Navbar from './components/layouts/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/books" />
        <Route path="/about" />
        <Route path="/events" />
        <Route path="/podcasts" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
