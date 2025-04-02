import { useState, useRef, useEffect } from 'react';
import { hashImage } from './hashImage';
import referenceImage1 from '/PhotoContestFlyer.JPG';
import referenceImage2 from '/club_email.JPG';
import referenceImage3 from '/club_convention_coin.JPG';
import Terminal from './Terminal'; // Import the Terminal component

function Login() {
  const [hasUsername, setHasUsername] = useState(false); // Always start with false
  const [usernameInput, setUsernameInput] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fileInputRef = useRef(null);
  const [bgColor, setBgColor] = useState('bg-black');
  const [shake, setShake] = useState(false);

  // Your deployed Google Apps Script URL for email triggers
  const scriptURL = "https://script.google.com/macros/s/AKfycbyf1ApsCNdUv_-NMI5Tc1ljuMldxmil0ZkvnF7vpt-KOgIqExhow36xzVNYGL7q6COJaA/exec";
  
  useEffect(() => {
    const isVerified = localStorage.getItem('isVerified');
    if (isVerified === 'true') {
      setIsLoggedIn(true); // Automatically log in if verified
    }
  }, []);
  // Handle username submission and trigger third email
  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = usernameInput.trim();
    if (trimmedUsername) {
      // Store the entered username (unique player ID) in localStorage
      localStorage.setItem("argPlayerId", trimmedUsername);

      // Call the Apps Script endpoint with trigger=thirdEmail.
      // This should look up the player's email and update their stage to "joinedClub"
      fetch(`${scriptURL}?pid=${encodeURIComponent(trimmedUsername)}&trigger=thirdEmail`)
        .then(response => response.json())
        .then(data => {
          console.log("Third email trigger response:", data);
          // Optionally, you can use data.message to display confirmation to the user.
          // Then show the regular login interface.
          setHasUsername(true);
        })
        .catch(error => {
          console.error("Error triggering third email:", error);
          // Even if there's an error, allow the user to continue to login.
          setHasUsername(true);
        });
    }
  };
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
  
    // Prevent uploading more than 3 images
    if (uploadedImages.length + files.length > 3) {
      setMessage('You can only upload up to 3 images.');
      setShake(true); // Trigger the shake animation
      setTimeout(() => setShake(false), 500); // Reset the shake state after the animation
      return;
    }
  
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
  
    let correctCount = 0;
    const scanResults = uploadedHashes.map((uploadedHash) =>
      referenceHashes.includes(uploadedHash)
    );
  
    // Trigger the scanning effect
    scanResults.forEach((isCorrect, index) => {
      const imageElement = document.getElementById(`uploaded-image-${index}`);
      if (imageElement) {
        const scanLine = document.createElement('div');
        scanLine.className = `absolute top-0 left-0 w-full h-full ${
          isCorrect ? 'bg-white' : 'bg-black'
        } opacity-50 animate-scan-line`;
        imageElement.appendChild(scanLine);
  
        // Remove the scan line after the animation
        setTimeout(() => {
          imageElement.removeChild(scanLine);
        }, 1000);
      }
    });
  
    // Wait for the scanning effect to complete
    await new Promise((resolve) => setTimeout(resolve, 2000));
  
    // Check how many uploaded images match the reference images
    referenceHashes.forEach((referenceHash) => {
      if (uploadedHashes.includes(referenceHash)) {
        correctCount++;
      }
    });
  
    if (correctCount === referenceHashes.length) {
      setMessage('Login Successful');
      setIsLoggedIn(true);
      localStorage.setItem('isVerified', 'true');
    } else {
      setMessage(`Login Failed`);
      setBgColor('bg-gray-100');
  
      setTimeout(() => setBgColor('bg-black'), 1000);
    }
  
    setUploadedImages([]);
    setIsLoading(false);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  if (isLoggedIn) {
    return <Terminal />;
  }

  // If username hasn't been submitted, show a form to enter the unique username
  if (!hasUsername) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="border-4 border-metal-gold p-6 rounded-lg shadow-lg w-11/12 max-w-md">
          <h2 className="text-2xl font-bold mb-4">Enter Your Username</h2>
          <form onSubmit={handleUsernameSubmit}>
            <input
              type="text"
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              placeholder="Enter your unique username"
              className="w-full p-2 mb-4 text-black"
              required
            />
            <button
              type="submit"
              className="bg-gold text-black font-bold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Otherwise, show the regular login interface (image verification area)
  return (
<div className={`flex flex-col items-center justify-center min-h-screen ${bgColor} text-white transition-colors duration-1000 ${ shake ? 'animate-shake' : '' }`}
>      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white transition-colors duration-1000">
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
              <div key={index} id={`uploaded-image-${index}`}  className="relative w-full h-auto mb-2">
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
          <div className="mt-4 text-sm text-gray-400">
            <p>
              Please upload <span className="font-bold text-white">3 images</span> that demonstrate your commitment to the cause. 
              All 3 images must be unedited and display club insignia/email in a prominent location.
            </p>
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
    </div>
  );
}

export default Login;
