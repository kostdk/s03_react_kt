import styles from "./OrderConfirm.module.css"

import React from 'react';
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Отправка формы</h2>
        <p>Ваша форма успешно отправлена!</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;