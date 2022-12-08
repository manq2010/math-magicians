import React, { useState } from 'react';
import './Quote.css';

function Quote() {
  const [quote, setQuote] = useState({
    quoteText: 'Once we accept our limits, we go beyond them.',
    author: 'albert-einstein',
  });

  const randomQuate = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => setQuote({ quoteText: data.content, author: data.author }));
  };

  return (
    <div className="qoutes">
      <blockquote>
        <p data-testid="qoutes">
          {quote.quoteText}
          {' '}
          -
          {' '}
          {quote.author}
        </p>
      </blockquote>
      <button onClick={() => randomQuate()} type="button">Next Quote</button>
    </div>

  );
}

export default Quote;
