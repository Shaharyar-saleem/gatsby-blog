import React from 'react';

export default function footer() {
    const footerStyle = {
        background: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px 5px',
        display: 'flex',
        justifyContent: 'center'
    }
  return (
    <div style={footerStyle}>
        <p>All rights reserved</p>
    </div>
  );
}
