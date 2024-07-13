"use client"
import React, { useEffect } from 'react';

const LoanApplication: React.FC = () => {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script');
    script.src = 'https://travel.bestinsurance.co.il/dist/loan-widget.js';
    script.async = true;
    script.onload = () => {
      if (window.LoanWidgetLibrary) {
        const handler = window.LoanWidgetLibrary.create({
          partnerId: 'partner1',
          themeColor: '#007bff',
          partnerLogo: './logo192.png',
          fontColor: '#784523',
          typography: 'Arial, sans-serif',
          mode: 'light',
        });
        handler.initializeButton('#start');
      }
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={styles.container}>
      <button id="start" style={styles.button}>
        Open Loan Application Modal
      </button>
    </div>
  );
};

// Styles as a JavaScript object
const styles = {
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgrey',
  },
  button: {
    border: 'none',
    padding: '10px 20px',
    borderRadius: '20px',
    backgroundColor: 'rgb(9, 5, 241)',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
  buttonHover: {
    backgroundColor: 'lightgreen',
    color: 'black',
  },
};

export default LoanApplication;
