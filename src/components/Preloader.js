import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onLoadingComplete }) => {
  const [currentText, setCurrentText] = useState('Hi there');
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1500); // Show "Hi there" for 1.5 seconds

    const timer2 = setTimeout(() => {
      setCurrentText('Welcome to my world');
      setFadeOut(false);
    }, 2500); // Fade out "Hi there" and show the next text

    const timer3 = setTimeout(() => {
      setFadeOut(true);
    }, 4000); // Show "Welcome to my world" for 1.5 seconds

    const timer4 = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 5500); // Fade out the second message

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`preloader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="rolling-preloader">
          <div className="rolling-circle"></div>
          <div className="rolling-circle-shadow"></div>
        </div>
        <div className="neon-container">
          <h1 className={`neon-text ${fadeOut ? 'fade-out-text' : ''}`}>
            {currentText}
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
