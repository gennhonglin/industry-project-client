import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WorkoutPage from './pages/WorkoutPage/WorkoutPage';
import './App.scss'

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/workout' element={<WorkoutPage />}></Route>
        </Routes>
        <Navigation/>
      </BrowserRouter>
  );
}

export default App;
