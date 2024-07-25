import React, { useEffect } from 'react';
import './web3login.css';

const Web3Login = () => {
  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected with account:', accounts[0]);
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      console.log('Ethereum browser extension not detected. Redirecting to MetaMask Chrome extension.');
      window.location.href = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.log('Please install MetaMask to use this feature.');
    }
  }, []);

  return (
    <button id="web3Login" onClick={connectMetaMask}>
      MetaMask Login
    </button>
  );
};

export default Web3Login;
