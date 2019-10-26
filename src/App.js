import React from 'react';
import { Menu, Header, Para } from './components';
import { Transition, config } from 'react-spring/renderprops';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

const App = () => {
    return (
        <Transition
            items={true}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            delay= '500'
            config = {config.molasses}
        >
        {show => show && (props => (
            <div style={props}>
                <Menu />
                <Header />
                <Para />
            </div>
        ))}
        </Transition>
    );
}

export default App;
