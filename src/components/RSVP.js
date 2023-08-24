import React, { useState } from 'react';
import './RSVP.css';

function RSVP() {
    const [showForm, setShowForm] = useState(false); // State to track form visibility

    return (
        <div>
            <button className="cta" onClick={() => setShowForm(true)}>RSVP Now</button>

            {showForm && (
                <div className="rsvp-container" onClick={() => setShowForm(false)}>
                    <iframe 
                        src="https://forms.office.com/r/wgducRrXDq?embed=true" 
                        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside iframe
                    >
                        Loading…
                    </iframe>
                </div>
            )}
        </div>
    );
}

export default RSVP;
