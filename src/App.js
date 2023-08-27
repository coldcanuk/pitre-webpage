import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import RSVP from './components/rsvp/RSVP';
import TwitterFeed from './components/x/TwitterFeed';
import BackgroundSetter from './components/BackgroundSetter';
import Gallery from './components/Gallery/Gallery'
import BookRefGallery from './components/bookref/BookRefGallery';

function App() {
  return (
    <Router>
      <BackgroundSetter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about_the_reunion">About the Reunion</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/book_references">Book References</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Welcome to the Pitre Family Reunion 2024</h1>
                <p>Join us as we celebrate our Acadian heritage and create memories that will last a lifetime.</p>
                <p>Please take a few moments and fill out the RSVP form. We are communicating with the <a href="https://cma2024.ca/en/" alt="Congrès mondial acadien 2024" keywords="pitre, family gathering, CMA2024, Acadian heritage, Acadie, Cajun, Acajun, famille, Acadian stories, Acadian reunion, Pitre family history, Acadian culture, Acadian roots">CMA2024</a> and the local venue and this information is required.
                  The exact location has yet to be confirmed. Upon confirmation we will post it here.</p>
                <p>The Gallery section is now online! We have a viewer that is currently loading 1 image and 1 video. We will be populating this in the days to come. The images are generated using <a href="https://www.midjourney.com">Midjourney</a> and <a HREF="https://www.leonardo.ai">Leonardo.AI</a>. The images were then loaded in to <a href="https://www.runwayml.com">RunwayML</a> to make vidoes out of the images. I then used ClipChamp to stitch it together.</p>
                <p>We have also created an X feed displayed below. Please give us a follow!</p>
                <RSVP />
                <div className="footer">
                  <TwitterFeed />
                  {/* ... other footer content ... */}
                </div>
              </>
            } />
            <Route path="/about_the_reunion" element={<h2>About the Reunion</h2>} />
            <Route path="/schedule" element={<h2>Schedule</h2>} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/book_references" element={<BookRefGallery />} />
          </Routes>
        </div>
      </BackgroundSetter>
    </Router>
  );
}
export default App;