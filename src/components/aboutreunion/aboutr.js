import React, { useContext } from 'react';
import Countdown from '../countdown/countdown';
import RSVP from '../rsvp/RSVP';
import './aboutr.css';
import { TranslationContext } from '../TranslationContext';

function AboutReunion() {
  const { messages, locale } = useContext(TranslationContext);

  return (
    <div className="about-reunion">
      <h1>{messages.welcome}</h1>
      <p>{messages.celebrate}</p>
      <div dangerouslySetInnerHTML={{ __html: messages.wherearewe }} />
      <p>{messages.rsvpInfo}</p>
      <RSVP />
      <Countdown />
    </div>
  );
}

export default AboutReunion;
