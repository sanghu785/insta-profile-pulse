
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  // Redirect to the home page on component mount
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  // This component will never actually render anything
  // since it immediately redirects to the homepage
  return null;
};

export default Index;
