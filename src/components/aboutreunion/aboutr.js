import React, { useContext } from 'react';
import Countdown from '../countdown/countdown';
import RSVP from '../rsvp/RSVP';
import './aboutr.css';
import { TranslationContext } from '../TranslationContext';

function AboutReunion() {
  const { messages, locale } = useContext(TranslationContext);

  return (
    <div className="about-reunion">
      <h1>{messages[locale].welcome}</h1>
      <p>{messages[locale].celebrate}</p>
      <div dangerouslySetInnerHTML={{ __html: messages[locale].wherearewe }} />
      <p>{messages[locale].rsvpInfo}</p>
      <RSVP />
      <Countdown />
    </div>
  );
}

export default AboutReunion;
