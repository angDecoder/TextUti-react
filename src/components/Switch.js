import React from 'react';

export default function Switch(props) {

    let lightMode = {
        btn : 'bg-gray-300 border-gray-400',
        slider : 'bg-gray-200 border-gray-400',
    };

    let darkMode = {
        btn : 'bg-green-400 border-green-600',
        slider : 'bg-blue-500 border-blue-600'
    };

    let list = props.mode==='light'?lightMode:darkMode;

    function changeSwitch() {
        let slide = document.getElementById('slide');
        slide.style.transitionDuration = "0.7s";
        if( props.mode==='light' ){
            slide.style.transform = "translateX(200%)";
            list = darkMode;
        }else{
            slide.style.transform = "translateX(0%)";
            list = lightMode;
        }

        props.change();
    }
    
    return (
            <button onClick={changeSwitch} className={`w-10 h-4 ${list.btn} border-2  rounded-full cursor-pointer`}>
                <div id='slide' className={`h-full ${list.slider} border-2 rounded-full aspect-square`}></div>
            </button>
    );
}
