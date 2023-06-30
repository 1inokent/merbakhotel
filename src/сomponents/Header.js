import React from 'react';
import BookingButton from './BookingButton';

import './Header.css';

function HeroHeader(props) {
  return (
    <div className="hero-header-container">
      <>
        <h1>Mer Bak</h1>
        <BookingButton>{props.buttonText}</BookingButton>
      </>
    </div>
  );
}

export default HeroHeader;
