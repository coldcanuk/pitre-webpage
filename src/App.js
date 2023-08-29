import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './App.css';
import RSVP from './components/rsvp/RSVP';
import TwitterFeed from './components/x/TwitterFeed';
import BackgroundSetter from './components/BackgroundSetter';
import Gallery from './components/Gallery/Gallery';
import BookRefGallery from './components/bookref/BookRefGallery';
import { TranslationContext, TranslationProvider } from './components/TranslationContext';
import AboutReunion from './components/aboutreunion/aboutr';

function App() {
  const { locale, setLocale, messages } = useContext(TranslationContext);

  const toggleLanguage = () => {
    setLocale(prevLocale => prevLocale === 'en' ? 'fr' : 'en');
  };

  return (
    <IntlProvider locale={locale} messages={messages}>
      <Router>
        <BackgroundSetter>
          <nav>
            <Link to="/"><FormattedMessage id="home" /></Link>
            <Link to="/about_the_reunion"><FormattedMessage id="about" /></Link>
            <Link to="/schedule"><FormattedMessage id="schedule" /></Link>
            <Link to="/Gallery"><FormattedMessage id="gallery" /></Link>
            <Link to="/book_references"><FormattedMessage id="ref" /></Link>
            <button onClick={toggleLanguage}>
              {locale === 'en' ? 'Français' : 'English'}
            </button>
          </nav>
          <div className="container">
            <Routes>
              <Route path="/" element={
                <>
                  <h1><FormattedMessage id="welcome" /></h1>
                  <p><FormattedMessage id="celebrate" /></p>
                  <p><FormattedMessage id="rsvpInfo" /></p>
                  <RSVP />
                  <div className="footer">
                    <TwitterFeed />
                    {/* ... other footer content ... */}
                  </div>
                </>
              } />
              <Route path="/about_the_reunion" element={<AboutReunion />} />
              <Route path="/schedule" element={<h2>Schedule</h2>} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/book_references" element={<BookRefGallery />} />
            </Routes>
          </div>
        </BackgroundSetter>
      </Router>
    </IntlProvider>
  );
}

// Wrap App component with TranslationProvider
function WrappedApp() {
  return (
    <TranslationProvider>
      <App />
    </TranslationProvider>
  );
}

export default WrappedApp;