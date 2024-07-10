import { useState, useEffect } from 'react';

const useOnlineStatus = () => {
  // State to store the online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  // Event handler for online event
  const handleOnline = () => {
    setIsOnline(true);
  };

  // Event handler for offline event
  const handleOffline = () => {
    setIsOnline(false);
  };

  // Function to manually check the online status
  const checkOnlineStatus = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    // Add event listeners for online and offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Set interval to check online status every 5 seconds
    const intervalId = setInterval(checkOnlineStatus, 5000);

    // Cleanup event listeners and interval on unmount
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(intervalId);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
