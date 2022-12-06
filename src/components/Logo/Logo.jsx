import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logo.css';

function Logo() {
  const navigate = useNavigate();
  return (
    <h1 className="logo" onClick={() => navigate('/')} aria-hidden="true">
      Math magicians
    </h1>
  );
}

export default Logo;
