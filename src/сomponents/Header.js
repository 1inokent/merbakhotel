import React from 'react';
import BookingButton from './BookingButton';

import styles from './Header.module.css';

function HeroHeader(props) {
  return (
    <div className={styles.heroHeaderContainer}>
      <>
        <h1 className={styles.h1}>Mer Bak</h1>
        <BookingButton>{props.buttonText}</BookingButton>
      </>
    </div>
  );
}

export default HeroHeader;
