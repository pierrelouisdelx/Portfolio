import React from 'react';

const SIZE = 60;

const DotGrid = () => (
    <div
        className='absolute w-full h-full bg-white bg-opacity-0 bg-center bg-gradient-radial -z-50'
        style={{
            backgroundSize: `${SIZE}px ${SIZE}px`,
            transform: 'translateZ(-500px)'
        }}
    ></div>
);

export default DotGrid;
