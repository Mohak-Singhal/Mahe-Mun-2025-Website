import React, { useEffect } from "react";
import "../styles/popup.css";

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  const handlePopupClick = () => {
    window.location.href = "/newpage"; // Change to actual URL
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content" onClick={handlePopupClick}>
        <img src="/images/sample-poster.jpg" alt="Conference Poster" />
      </div>
    </div>
  );
};

export default Popup;
