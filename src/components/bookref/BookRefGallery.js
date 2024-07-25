import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './BookRefGallery.css';

function BookRefGallery() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://pitrewebpagestorage.blob.core.windows.net/$web/images/books_thumbnails/booklist.csv')
            .then(response => response.text())
            .then(data => {
                const rows = data.split('\n').slice(1);
                const booksData = rows.map(row => {
                    const columns = row.split(',');
                    return {
                        original: columns[3],
                        description: `${columns[0]} by ${columns[1]}`,
                        renderItem: () => (
                            <a href={columns[2]} target="_blank" rel="noopener noreferrer">
                                <img src={columns[3]} alt={columns[0]} />
                            </a>
                        )
                    };
                });
                setBooks(booksData);
            });
    }, []);

    return (
        <div className="bookref-gallery-container">
            <ImageGallery items={books} showPlayButton={false} />
        </div>
    );
}

export default BookRefGallery;
