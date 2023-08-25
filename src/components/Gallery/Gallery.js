import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Gallery.css';

function Gallery() {
    const images = [
        {
            original: 'https://pitrewebpagestorage.blob.core.windows.net/$web/images/pitreinfo-background.png',
            thumbnail: 'https://pitrewebpagestorage.blob.core.windows.net/$web/images/pitreinfo-background.png', // You can provide a smaller version for the thumbnail or use the same image
        },
        {
            original: 'https://pitrewebpagestorage.blob.core.windows.net/$web/videos/FFMontageAcadie.mp4',
            thumbnail: 'https://pitrewebpagestorage.blob.core.windows.net/$web/images/FFMontageThumbnail.jpg', // Provide a thumbnail for the video
            renderItem: () => (
                <video controls preload="metadata" width="320" id="videoPlayer" poster="https://pitrewebpagestorage.blob.core.windows.net/$web/images/Flag_of_Acadia.svg.png">
                    <source src="https://pitrewebpagestorage.blob.core.windows.net/$web/videos/FFMontageAcadie.mp4" type="video/mp4" />
                </video>
            )
        }
    ];

    return (
        <div className="gallery-container">
            <ImageGallery items={images} showPlayButton={false} />
        </div>
    );
}

export default Gallery;