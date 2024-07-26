import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Countdown from '../countdown/countdown';
import RSVP from '../rsvp/RSVP';
import './aboutr.css';

function AboutReunion() {
  return (
    <div className="about-reunion">
      <h1><FormattedMessage id="welcome" /></h1>
      <p><FormattedMessage id="celebrate" /></p>
      <FormattedHTMLMessage
        id="wherearewe"
        values={{
          link: (...chunks) => <a href="https://www.ecoledanslanse.com/" target="_blank" rel="noopener noreferrer">{chunks}</a>
        }}
      />
      <p><FormattedMessage id="rsvpInfo" /></p>
      <RSVP />
      <Countdown />
    </div>
  );
}

export default AboutReunion;
