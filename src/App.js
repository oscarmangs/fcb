import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Lineup from './components/Lineup';
import Schedule from './components/Schedule';
import HeaderMenu from './components/HeaderMenu';

//import { initializeApp } from "firebase/App";
//import { getDatabase, ref, onValue } from "firebase/database";

function App() {

const firebaseConfig = {
  apiKey: "AIzaSyDvlmCOzIoH9IL6Sj7AVmKWMd8etgH1XGw",
  authDomain: "fcbarcelona-96463.firebaseapp.com",
  databaseURL: "https://fcbarcelona-96463-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fcbarcelona-96463",
  storageBucket: "fcbarcelona-96463.appspot.com",
  messagingSenderId: "562417131772",
  appId: "1:562417131772:web:cff41de66538c9cf25f779",
  measurementId: "G-H8D45Q9Q0L"
};

//const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
//console.log(database.getDatabase()); 


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
