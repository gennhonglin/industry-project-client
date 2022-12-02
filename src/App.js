import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
        <Navigation/>
      </BrowserRouter>
  );
}

export default App;
