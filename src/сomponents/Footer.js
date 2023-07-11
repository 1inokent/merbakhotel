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
      <div style={{ display: 'flex', justifyContent: 'end', padding: '10px' }}>
        <p>
          по всем вопросам:{' '}
          <a href="tel:+79788573511" style={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            +7 978 857 35 11
          </a>
        </p>
      </div>
    </div>
  );
}
