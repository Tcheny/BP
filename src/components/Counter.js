import React from 'react';
// import { Spring, config } from'react-spring';
import {Spring, config } from 'react-spring/renderprops'
const Counter = () => (
    <Spring
        from={{ number: 0 }}
        to={{ number: 10 }}
        delay= '1000'
        config = { config.slow }>
        {props => <div className='main-counter'>{props.number.toFixed()}</div>}
    </Spring>
)

export default Counter;
