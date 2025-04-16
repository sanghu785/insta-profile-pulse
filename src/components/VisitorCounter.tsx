
import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    // Get the current count from localStorage
    const storedCount = localStorage.getItem('visitorCount');
    
    if (storedCount) {
      // If we have a stored count, increment it
      const newCount = parseInt(storedCount) + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setVisitorCount(newCount);
    } else {
      // First visit
      localStorage.setItem('visitorCount', '1');
      setVisitorCount(1);
    }

    // Add visibility change listener to handle resuming from sleep
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        // Refresh count when tab becomes visible again
        const currentCount = localStorage.getItem('visitorCount');
        if (currentCount) {
          setVisitorCount(parseInt(currentCount));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return (
    <div className="text-sm text-gray-500 mt-4">
      <p>Visitor count: <span className="font-semibold">{visitorCount}</span></p>
    </div>
  );
};

export default VisitorCounter;
