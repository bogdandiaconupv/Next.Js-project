import React from 'react';

export default function Hero() {
  return (
    <div className='w-full h-fit bg-red-200 flex flex-col items-center relative'>
      <img src="/hero.jpg" alt="" className='w-full h-full object-cover'></img>
      <svg
        id="eqpYWaUwtAC1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 300 300"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        className='absolute'
        style={{ width: '100%', height: '100%', zIndex: '10' }}
      >
        <g transform="matrix(1 0 0 0.993988 0.000002 1.112799)">
          <line x1="0" y1="-35.348132" x2="0" y2="35.348133" transform="translate(150 264.148132)" fill="none" stroke="#d3cfcf" />
          <line x1="-1.91261" y1="0" x2="1.91261" y2="0" transform="translate(150 291.617462)" fill="#d3cfcf" stroke="#d3cfcf" />
          <line x1="-5.191895" y1="0" x2="5.191896" y2="0" transform="translate(150 299.496265)" fill="none" stroke="#d3cfcf" />
          <line x1="-3.0283" y1="0" x2="3.0283" y2="0" transform="translate(150 296.016466)" fill="none" stroke="#d3cfcf" />
        </g>
        <ellipse rx="80.26146" ry="79.051857" transform="translate(150 150)" fill="rgba(237,210,220,0)" stroke="#d3cfcf" stroke-dashoffset="15" stroke-dasharray="50,20,20,50" />
      </svg>
      <h1 className='text-3xl absolute' style={{ zIndex: '20' }}>Let's share the experience</h1>
    </div>
  );
}
