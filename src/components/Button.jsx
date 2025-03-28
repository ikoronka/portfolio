import React from 'react';
import '../styles/index.css';

export default function Button({ value }) {


    return (
      <button className='navButton'>
        {value}
      </button>
    );
}
