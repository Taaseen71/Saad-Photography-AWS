import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './views/Home';
import ClientImages from './views/ClientImages';
// import TrackDay from './views/TrackDay';
// import Nav from './components/nav/Nav';
// import FullPageScroll from './components/full-page/FullPageScroll';


function App() {    
  return (
    <div className="App container-fluid">
      <Router>
        {/* <Nav/> */}
        <Routes>
          {/* <Route path="/track-day" element={<TrackDay/>}/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/photos/:id" element={<ClientImages/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
