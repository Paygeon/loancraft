"use client"
import React from 'react';
import styles from './button.module.css'; // Import styles from the CSS module


const NeoPopTiltedButton: React.FC = () => {
  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (event.target as HTMLButtonElement).classList.add(styles.down); // Use styles from the CSS module
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    (event.target as HTMLButtonElement).classList.remove(styles.down); // Use styles from the CSS module
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).classList.add(styles.down); // Use styles from the CSS module
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
    (event.target as HTMLButtonElement).classList.remove(styles.down); // Use styles from the CSS module
  };

  return (
    <div className={styles.cardContainer}> {/* Use styles from the CSS module */}
      <div className={styles.btnContainer}> {/* Use styles from the CSS module */}
        <div className={styles.btnMain}> {/* Use styles from the CSS module */}
          <button
            className={styles.btn3d} 
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            Click Me
          </button>
        </div>
        <div className={styles.shadow}></div> {/* Use styles from the CSS module */}
      </div>
    </div>
  );
};

export default NeoPopTiltedButton;