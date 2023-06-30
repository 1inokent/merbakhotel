import React from 'react';

export default function Footer() {
  return (
    <div
      fluid
      style={{
        backgroundColor: '#fff',
        color: 'rgba(0, 0, 0, 0.55)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
      >
        <p>Футер сайта</p>
      </div>
    </div>
  );
}
