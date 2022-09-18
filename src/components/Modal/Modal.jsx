import React, { useEffect } from 'react';
import styles from './Modal.module.css';


export const Modal = ({imgData, closeModal }) => {

    const handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            closeModal();
        }
    };

  useEffect(() => {
    const handleEcsapeKey = (evt) => {
      if (evt.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleEcsapeKey);
  
    return () => {
      document.removeEventListener("keydown", handleEcsapeKey);
    }
  }, [closeModal])

    const {overlay, modal} = styles;
    const {src, alt} = imgData;

    return (
      <div className={overlay} onClick={handleOverlayClick}>
        <div className={modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    )
}


export default Modal;