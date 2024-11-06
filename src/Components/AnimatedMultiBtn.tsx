import React from 'react';
import "../Styles/AnimatedMultiBtn.css"
const AnimatedMultiBtn = () => {
  return (
    <div className='animated-btn'>
      <button>Button</button>
      <button style={{ '--c': '#E95A49' } as React.CSSProperties}>Button</button>
    </div>
  );
};

export default AnimatedMultiBtn;
