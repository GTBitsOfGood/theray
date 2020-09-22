import React from 'react';

import './NextArrow.css';

function NextArrow() {
  return (
    <button type="button" className="arrow">
      <svg
        className="arrow-svg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M59.625 29.8125L54.3705 24.558L33.5391 45.3523V0H26.0859V45.3523L5.29172 24.5208L0 29.8125L29.8125 59.625L59.625 29.8125Z" />
      </svg>
    </button>
  );
}

export default NextArrow;
