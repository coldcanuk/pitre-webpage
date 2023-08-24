import React from 'react';
import './App.css';
import RSVP from './components/RSVP';
import TwitterFeed from './components/TwitterFeed';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">Home</a>
        <a href="#">About the Reunion</a>
        <a href="#">Schedule</a>
        <a href="#">RSVP</a>
        <a href="#">Reunion Gallery</a>
        <a href="#">Book References</a>
      </nav>
      <div className="container">
        <h1>Welcome to the Pitre Family Reunion 2024</h1>
        <p>Join us as we celebrate our Acadian heritage and create memories that will last a lifetime.</p>
        <p>Please take a few moments and fill out the RSVP form. We are communicating with the CMA2024 and the local venue and this information is required
          The exact location has yet to be confirmed. Upon confirmation we will post it here.</p>
        <p>We have also created an X feed displayed below. Please give us a follow!</p>
        <RSVP />
      </div>
      <div className="footer">
        <TwitterFeed />
        {/* ... other footer content ... */}
      </div>
    </div>
  );
}
export default App;