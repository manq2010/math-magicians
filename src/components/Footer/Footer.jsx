import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const year = new Date().getFullYear();
    setYear(year);
  }, []);
  return (
    <div className="footer">
      <p>
        Mancoba Sihlongonyane &copy;
        {' '}
        {year}
      </p>
    </div>
  );
}

export default Footer;
