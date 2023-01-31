import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/Starships/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage';


function App() {
  return (
    <>
      <div>
        <h1>
        Starship
        </h1>
      </div>
        <Routes>
          <Route path='/' element={<StarshipList />} />
          <Route path='/starship' element={<StarshipPage />} />
        </Routes>
    </>
  );
}

export default App;
