import { FormattedMessage } from 'react-intl';
import './aboutr.css';
// import { TranslationContext } from '../TranslationContext';
// import React, { useContext } from 'react';

function AboutReunion() {
  // We can use the context if needed, but for now, we'll just use the FormattedMessage component
  // const { locale, setLocale, messages } = useContext(TranslationContext);

  return (
    <div className="about-reunion">
      <h1><FormattedMessage id="welcome" /></h1>
      <p><FormattedMessage id="celebrate" /></p>
      <p><FormattedMessage id="rsvpInfo" /></p>
    </div>
  );
}

export default AboutReunion;
