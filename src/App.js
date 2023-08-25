import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import RSVP from './components/rsvp/RSVP';
import TwitterFeed from './components/x/TwitterFeed';
import BackgroundSetter from './components/BackgroundSetter';

function App() {
  return (
    <Router>
      <BackgroundSetter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about_the_reunion">About the Reunion</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/reunion_gallery">Reunion Gallery</Link>
          <Link to="/book_references">Book References</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to the Pitre Family Reunion 2024</h1>
                <p>Join us as we celebrate our Acadian heritage and create memories that will last a lifetime.</p>
                <p>Please take a few moments and fill out the RSVP form. We are communicating with the CMA2024 and the local venue and this information is required
                  The exact location has yet to be confirmed. Upon confirmation we will post it here.</p>
                <p>We have also created an X feed displayed below. Please give us a follow!</p>
                <RSVP />
              </>
            } />
            <Route path="/about_the_reunion" element={<h2>About the Reunion</h2>} />
            <Route path="/schedule" element={<h2>Schedule</h2>} />
            <Route path="/reunion_gallery" element={<h2>Reunion Gallery</h2>} />
            <Route path="/book_references" element={<h2>Book References</h2>} />
          </Routes>
        </div>
        <div className="footer">
          <TwitterFeed />
          {/* ... other footer content ... */}
        </div>
      </BackgroundSetter>
    </Router>
  );
}
export default App;