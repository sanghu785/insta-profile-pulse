
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
  }, []);
  
  return (
    <div className="text-sm text-gray-500 mt-4">
      <p>Visitor count: <span className="font-semibold">{visitorCount}</span></p>
    </div>
  );
};

export default VisitorCounter;
