import React from 'react';
import './ReunionGallery.css';

function ReunionGallery() {
    return (
        <div className="gallery-container">
            <h2>Reunion Gallery</h2>
            <video controls width="100%" height="auto">
                <source src="https://pitrewebpagestorage.blob.core.windows.net/$web/videos/FFMontageAcadie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default ReunionGallery;
