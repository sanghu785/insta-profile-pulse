
import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  
  useEffect(() => {
    try {
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
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      // Fallback if localStorage isn't available
      setVisitorCount(1);
    }
  }, []);
  
  return (
    <div className="text-sm bg-white rounded-lg shadow-md p-4 flex items-center justify-center space-x-2 border border-gray-100 w-full">
      <Eye size={16} className="text-blue-500" />
      <p className="font-medium">Visitor count: <span className="font-semibold">{visitorCount}</span></p>
    </div>
  );
};

export default VisitorCounter;
