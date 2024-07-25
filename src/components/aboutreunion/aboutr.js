import { FormattedMessage } from 'react-intl';
import Countdown from '../countdown/countdown';
import RSVP from '../rsvp/RSVP';
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
      <p>
        <FormattedMessage 
          id="wherearewe"
          values={{
            link: (...chunks) => <a href="https://www.ecoledanslanse.com/" target="_blank" rel="noopener noreferrer">{chunks}</a>
          }}
        />
      </p>
      <p><FormattedMessage id="rsvpInfo" /></p>
      <RSVP />
      <Countdown />
    </div>
  );
}

export default AboutReunion;
