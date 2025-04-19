
import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        // Make a request to hits.sh to increment and get the count
        const response = await fetch('https://hits.sh/yourname.github.io.json');
        const data = await response.json();
        setVisitorCount(data.hits);
      } catch (error) {
        console.error('Error fetching visitor count:', error);
        // Fallback to 0 if there's an error
        setVisitorCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);
  
  if (isLoading) {
    return (
      <div className="text-sm bg-white rounded-lg shadow-md p-4 flex items-center justify-center space-x-2 border border-gray-100 w-full">
        <p>Loading visitor count...</p>
      </div>
    );
  }

  return (
    <div className="text-sm bg-white rounded-lg shadow-md p-4 flex items-center justify-center space-x-2 border border-gray-100 w-full">
      <Eye size={16} className="text-blue-500" />
      <p className="font-medium">Visitor count: <span className="font-semibold">{visitorCount}</span></p>
    </div>
  );
};

export default VisitorCounter;
