import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './views/Home';
import TrackDay from './views/TrackDay';
import Nav from './components/nav/Nav';


function App() {    
  return (
    <div className="App container-fluid">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/track-day" element={<TrackDay/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
