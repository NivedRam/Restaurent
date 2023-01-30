import React from 'react';
import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';
import RestaurentList from './components/RestaurentList';
import ViewRest from './components/ViewRest';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Headers />

        <Routes>
          {/* (path setting for restaurent list) */}
          <Route path='/' element={<RestaurentList />} />
          {/* (path setting for view rest) */}
          <Route path='/View-restaurent/:id' element={<ViewRest />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
