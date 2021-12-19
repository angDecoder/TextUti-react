import React from 'react'

function Alert(props) {

    if( props.alert===null ) return null;
    let alertType = props.alert.type;
    let colour = 'blue';
    if( alertType.toLowerCase()==='success' ) colour = 'bg-green-300 border-green-700';
    else if( alertType.toLowerCase()==='danger' ) colour = 'bg-red-300 border-red-700';
    else if ( alertType.toLowerCase()==='warning' ) colour = 'bg-orange-300 border-orange-700';

    setTimeout(() => {
        let alert = document.getElementById('alert-id');
        alert.style.opacity = '0.25'
        alert.style.transitionDuration = '1.5s';
        alert.style.transform = 'translateX(100%)';
        setTimeout(() => {
            alert.style.opacity = '0.1';
        }, 500);
        setTimeout(() => {
            props.setAlert(null);
        }, 1000);

    }, 2000);

    return (
        props.alert &&
        <div id='alert-id' className={`px-4 py-2 absolute  box-border  w-screen rounded-md text-xs border-b-4 ${colour} `}>
        <strong className='capitalize'>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
