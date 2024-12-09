import React, { useState } from 'react';
import './GalleryImageUpload.css';

const GalleryImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    // Handle file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file)); // Preview the image
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (image) {
            // Handle image upload logic here (e.g., sending to backend)
            console.log('Image uploaded:', image);
            alert('Image uploaded successfully!');
            setImage(null); // Clear the image after upload
            setImageUrl('');
        } else {
            alert('Please select an image to upload.');
        }
    };

    return (
        <div className="gallery-image-upload">
            <h2>Upload Gallery Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="imageUpload">Select Image</label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                </div>
                <div className="image-preview">
                    {imageUrl && <img src={imageUrl} alt="Preview" className="preview-img" />}
                </div>
                <button type="submit" className="submit-button">Upload Image</button>
            </form>
        </div>
    );
};

export default GalleryImageUpload;
