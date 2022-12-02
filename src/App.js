import './App.css';
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
        </Routes>
        <Navigation/>
      </BrowserRouter>
  );
}

export default App;
