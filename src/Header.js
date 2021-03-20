import React from 'react';
import './css/header.css';

function Header() {

    return (
        <div className='headDev' >
            <div className='item' id='headItem1' >
                The Developer Repository
            </div>
            <div className='item' id='headItem2' ><img src='images/devPics/dev_head.png' alt='developer-pic' /></div>
        </div>
    );

}

export default Header;
