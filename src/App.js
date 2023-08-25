import React from 'react';
import { BrowserRouter as Router, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import RSVP from './components/rsvp/RSVP';
import TwitterFeed from './components/x/TwitterFeed';

function App() {
  const location = useLocation();
  // Determine the background based on the current path
  const getBackground = () => {
    switch (location.pathname) {
      case "/about_the_reunion":
        return "url('https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_54c08a8e-f447-4603-9c85-bf57f6ee4c25_background_2.png')";
      case "/schedule":
        return "url('https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_93dbaec9-7b56-4c63-b843-965014caf4de_background_4.png')";
      case "/reunion_gallery":
        return "url('https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_b805e45e-a565-407d-9b2d-07c4471f031d_background_3.png')";
      case "/book_references":
        return "url('https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_ee7bc3c1-25dc-417b-aa6f-c8ec2dd3ca81_background_1.png')";
      default:
        return "url('https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_54c08a8e-f447-4603-9c85-bf57f6ee4c25_background_2.png')";
    }
  }
  return (
    <Router>
      <div className="App" style={{ backgroundImage: getBackground() }}>
        <nav>
        <Link to="/">Home</Link>
          <Link to="/about_the_reunion">About the Reunion</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/reunion_gallery">Reunion Gallery</Link>
          <Link to="/book_references">Book References</Link>
        </nav>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <h1>Welcome to the Pitre Family Reunion 2024</h1>
              <p>Join us as we celebrate our Acadian heritage and create memories that will last a lifetime.</p>
              <p>Please take a few moments and fill out the RSVP form. We are communicating with the CMA2024 and the local venue and this information is required
                The exact location has yet to be confirmed. Upon confirmation we will post it here.</p>
              <p>We have also created an X feed displayed below. Please give us a follow!</p>
              <RSVP />
            </Route>
            <Route path="/about_the_reunion">
              <h2>About the Reunion</h2>
              {/* Replace with your actual component */}
            </Route>
            <Route path="/schedule">
              <h2>Schedule</h2>
              {/* Replace with your actual component */}
            </Route>
            <Route path="/reunion_gallery">
              <h2>Reunion Gallery</h2>
              {/* Replace with your actual component */}
            </Route>
            <Route path="/book_references">
              <h2>Book References</h2>
              {/* Replace with your actual component */}
            </Route>
          </Switch>
        </div>
        <div className="footer">
          <TwitterFeed />
          {/* ... other footer content ... */}
        </div>
      </div>
    </Router>
  );
}
export default App;