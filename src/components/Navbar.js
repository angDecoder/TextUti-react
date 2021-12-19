import React from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';

export default function Navbar(props) {
    let lightMode = {
        headBg : 'bg-teal-300 border-b-4 border-teal-600',
        linkClr : 'bg-green-500 border-2 border-green-700 hover:bg-black text-white',
        text : ""
    };
    let darkMode = {
        headBg : 'bg-black border-gray-600 border-b-4',
        linkClr : 'bg-black border-2  border-green-600 hover:bg-green-500',
        text : 'text-white'
    };
    
    let list = props.mode==='light'?lightMode:darkMode;
    
    return (
        <>
            <header  className={`flex ${list.text} opacity- relative top-0 z-50  w-screen items-center justify-between px-12 py-2 ${list.headBg} `}>
                <nav className='z-50 flex w-3/ justify-items-center'>
                    <div className='flex items-center'>
                        <div className='flex items-center justify-center w-8 h-8 mx-1 text-green-400 bg-black rounded-full'>{props.initials}</div>
                        <p className='text-lg font-black'>{props.title}</p>
                    </div>
                    <ul className='flex items-center text-xs font-bold leading-none'>

                        <a className={`flex items-center justify-center h-6 px-2 mx-2 ${list.linkClr} rounded-full`} href='/'>Home</a>
                        <a className={`flex items-center justify-center h-6 px-2 mx-2 ${list.linkClr} rounded-full`} href='/'>About</a>
                        <a className={`flex items-center justify-center h-6 px-2 mx-2 ${list.linkClr} rounded-full `} href='/'>Contact</a>
                    </ul>
                </nav>
                <Switch className='self-start' change={props.change} mode={props.mode} />
            </header>
        </>
    )
};



Navbar.propTypes = {
    title : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'TITLE',
}