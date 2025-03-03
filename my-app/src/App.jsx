import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Foundation from './pages/Foundation';
import Target from './pages/Target';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Achievements from './pages/Achievements';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content container py-4">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/target" element={<Target />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/achievements" element={<Achievements />} />
          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
