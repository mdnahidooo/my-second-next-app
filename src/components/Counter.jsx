"use client"

import React, { useState } from 'react';

const Counter = () => {
    console.log("The header component");
    const [count, setCount] = useState(0);
    return (
        <div className='text-center'>

            <h2 className='text-3xl'>Counter: {count}</h2>

            <button onClick={() => setCount(count + 10)} className='btn btn-secondary btn-outline'>Increment</button>



        </div>
    );
};

export default Counter;