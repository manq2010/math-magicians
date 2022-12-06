import React, { useState } from 'react';

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
      <button onClick={() => randomQuate()} type="button">Next Quote</button>
      <blockquote>
        <p>{quote.quoteText}</p>
      </blockquote>
      <p>{quote.author}</p>
    </div>

  );
}

export default Quote;
