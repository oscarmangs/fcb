import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Lineup from './components/Lineup';
import Schedule from './components/Schedule';
import HeaderMenu from './components/HeaderMenu';
//HEJ
function App() {
  return (
    <>
   <HeaderMenu/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="lineup" element={ <Lineup/> } />
      <Route path="schedule" element={ <Schedule/> } />
    </Routes>
    </>
  );
}

export default App;
