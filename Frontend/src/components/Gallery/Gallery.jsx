import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  // Fetch images from backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/gallery/getImage');
        setImages(response.data);  // Set the fetched images in state
      } catch (err) {
        console.error('Error fetching images:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.imageUrl} alt={`Alumni Event ${index + 1}`} />
              <div className="overlay">
                <p>Event #{index + 1}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </section>
  );
};

export default Gallery;
