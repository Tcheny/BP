import React from 'react';
import { Trail } from 'react-spring/renderprops'


const Header = () => {
    const texts = [
        { title: "BEEP", id: 1 },
        { title: "BEER", id: 2 },
      ];
    return (
        <div className='main-background'>
            <Trail
                items={texts}
                keys={text => text.id}
                from={{ marginLeft: '-10%', opacity: 0 }}
                to={{ marginLeft: '35%', opacity: 1 }}
                delay= '1000'
            >
            {text => props => (
                <div style={props}>
                        <div className={text.id === 1 ? 'main-title1' : 'main-title2'}>
                            {text.title}
                        </div>
                </div>
                )}
            </Trail>
        </div>
    );
};



export default Header;
