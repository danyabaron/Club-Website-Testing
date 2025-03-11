import React, { useState, useRef } from 'react';
import { hashImage } from './hashImage';
import referenceImage1 from '../assets/IMG_0153.webp';
import referenceImage2 from '../assets/IMG_0154.webp';
import referenceImage3 from '../assets/IMG_0548.webp';
import Terminal from './Terminal'; // Import the Terminal component

function Login() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bgColor, setBgColor] = useState('bg-black');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newUploadedImages = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newUploadedImages.push(e.target.result);
        if (newUploadedImages.length === files.length) {
          setUploadedImages((prevImages) => [...prevImages, ...newUploadedImages]);
          fileInputRef.current.value = ''; 
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setMessage('');

    const referenceImages = [referenceImage1, referenceImage2, referenceImage3];
    const referenceHashes = await Promise.all(referenceImages.map(hashImage));
    const uploadedHashes = await Promise.all(uploadedImages.map(hashImage));

    const allImagesMatch = referenceHashes.every(referenceHash => uploadedHashes.includes(referenceHash));
   
    console.log(`Uploaded Hashes Count: ${uploadedHashes.length}, Reference Hashes Count: ${referenceHashes.length}`);
    if (allImagesMatch && uploadedHashes.length === referenceHashes.length) {
      setMessage('Login Successful');
      setIsLoggedIn(true); // Set login status to true
    } else {
      setBgColor('bg-black');
      setMessage('Incorrect Credentials');
      setTimeout(() => setBgColor('bg-gray-100'), 1000);
    }
    setUploadedImages([]);

    setIsLoading(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  if (isLoggedIn) {
    return <Terminal />; // Render Terminal component if logged in
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white transition-colors duration-1000">
      <div className="border-4 border-metal-gold p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="flex items-center mt-2 border border-gray-400 p-2 rounded-md">
          <button
            onClick={handleButtonClick}
            className="bg-gray-200 text-black font-bold px-4 py-2 rounded-md border border-gray-400 hover:bg-gray-300 transition-colors"
            style={{ fontFamily: 'Times New Roman' }}
          >
            Choose Files
          </button>
          <p className="ml-4">{uploadedImages.length > 0 ? `${uploadedImages.length} files chosen` : 'No file selected'}</p>
        </div>
        <div className="mt-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative w-full h-auto mb-2">
              <img src={image} alt={`Uploaded ${index}`} className="w-full h-auto" />
              <button
                onClick={() => handleDeleteImage(index)}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        {isLoading ? (
          <div className="w-full bg-gray-200 rounded-full h-4 mt-6">
            <div className="bg-blue-600 h-4 rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        ) : (
          <>
            <button
              onClick={handleSubmit}
              className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors mt-6"
            >
              Submit
            </button>
            {message && (
              <p className={`mt-4 ${message === 'Login Successful' ? 'text-green-500' : 'text-red-500'}`}>
                {message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Login;