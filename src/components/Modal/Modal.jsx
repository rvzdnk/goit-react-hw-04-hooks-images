import React, { Component } from 'react';
import styles from './Modal.module.css';


export class Modal extends Component {

    handleEscapeKey = (e) => {
        if (e.key === "Escape") {
            this.props.closeModal();
        }
    }

    handleOverlayClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.closeModal();
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleEscapeKey);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscapeKey);
    }

    render() {
    const {overlay, modal} = styles;
    const {src, alt} = this.props;

    return (
      <div className={overlay} onClick={this.handleOverlayClick}>
        <div className={modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    )
    }
}

export default Modal;