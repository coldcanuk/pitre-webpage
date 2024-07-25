import React, { useEffect } from 'react';
import './TwitterFeed.css';

function TwitterFeed() {
  useEffect(() => {
    // Ensure the Twitter widgets JavaScript file is loaded
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <a 
        className="twitter-timeline" 
        href="https://twitter.com/aCajunVoyageur?ref_src=twsrc%5Etfw"
      >
        Tweets by aCajunVoyageur
      </a>
    </div>
  );
}

export default TwitterFeed;