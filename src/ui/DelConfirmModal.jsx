import { AlertTriangle, X } from 'lucide-react';

export default function ConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm 
}) {
  if (!isOpen) return null;

  return (
    <div className="confirm-modal-overlay">
      <div className="confirm-modal-content">
        <div className="del-modal-row">
            <div className="confirm-modal-icon">
                <AlertTriangle size={18} />
            </div>

            {/* Title and Message */}
            <div className="confirm-modal-body">
                <h3 className="confirm-modal-title">Clear cart?</h3>
                <p className="confirm-modal-message">
                    All items will be removed. This can't be undone.
                </p>
            </div>
            <button 
                onClick={onClose}
                className="confirm-modal-close"
                >
                <X size={14} />
            </button>
        </div>
        
        <div className="confirm-modal-buttons">
          <button 
            onClick={onClose}
            className="confirm-modal-cancel-btn"
          >
            Cancel
          </button>
          
          <button 
            onClick={onConfirm}
            className="confirm-modal-clear-btn"
          >
            Clear cart
          </button>
        </div>

        {/* Close Icon */}
        
      </div>
    </div>
  );
}