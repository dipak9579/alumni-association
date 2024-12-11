import React, { useState } from 'react';
import axios from 'axios';
import './GalleryImageUpload.css';

const GalleryImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');  // State to hold the uploaded image URL
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    // Handle file input change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setImageUrl(URL.createObjectURL(file));  // Preview the image
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            alert('Please select an image to upload.');
            return;
        }

        setUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('image', image);  // Append image to form data

        try {
            // Send POST request to upload image to backend
            const response = await axios.post('http://localhost:5000/api/gallery/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // If successful, get the Cloudinary URL from response
            const uploadedImageUrl = response.data.url;
            alert('Image uploaded successfully!');
            console.log('Uploaded Image URL:', uploadedImageUrl);

            // Set the uploaded image URL to display it
            setImageUrl(uploadedImageUrl);  // Use Cloudinary URL for preview
            setImage(null); // Clear the file input after upload
        } catch (err) {
            console.error('Error uploading image:', err);
            setError('Failed to upload image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="gallery-image-upload">
            <h2>Upload Gallery Image</h2>
            {error && <p className="error">{error}</p>}
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
                    {/* Display the uploaded image preview */}
                    {imageUrl && <img src={imageUrl} alt="Preview" className="preview-img" />}
                </div>
                <button type="submit" className="submit-button" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
            </form>
        </div>
    );
};

export default GalleryImageUpload;
