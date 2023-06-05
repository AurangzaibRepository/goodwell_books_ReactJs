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
    </BrowserRouter>
  );
}

export default App;
