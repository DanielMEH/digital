import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import { useEffect, useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import Login from '../pages/Login';

function AppRouter() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const simulateProgress = () => {
      setLoadingProgress(0); // Reset the loading progress
      setLoadingProgress(30); // Show initial progress

      // Simulate async operation (e.g., API call) using setTimeout
      setTimeout(() => {
        setLoadingProgress(100); // Simulate progress after some delay
        // Add any additional logic or API calls here if needed

        // Simulate additional progress after more delay
        setTimeout(() => {
          setLoadingProgress(70); // Complete the progress
        }, 1000);
      }, 1000);
    };

    // Call the function to start simulating progress
    simulateProgress();

    // Clean up the loading bar on component unmount
    return () => {
      setLoadingProgress(0); // Reset the loading progress
    };
  }, [location]);

  return (
    <>
      <LoadingBar
        color="#44b2fd"
        progress={loadingProgress}
        onLoaderFinished={() => {
          setLoadingProgress(0);
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Handle unknown routes */}
        <Route path="*" element={<div>Pagina no encontrada</div>} />
      </Routes>
    </>
  );
}

export default AppRouter;
