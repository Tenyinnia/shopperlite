import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    // Try to go back naturally first
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to shop page
      navigate('/shop', { replace: true });
    }
  };

  return (
    <button 
      className="back-button flex items-center gap-2"
      onClick={handleBack}
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </button>
  );
}