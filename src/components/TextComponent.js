import React, {useState} from 'react';


export default function TextComponent(props) {
    const [text, setText] = useState("");

    function onChangeHandle(e) {
        setText(e.target.value);
    }

    function convertUpper() {
        let target = document.getElementById("textarea");
       setText(target.value.toUpperCase());
    }
    
    function convertLower(){
        let target = document.getElementById('textarea');
        setText(target.value.toLowerCase());    
    }

    function trimSpace() {
        setText(text.replace(/\s+/g,' ').trim());
    }  

    function clearText() {
        setText("");
        console.log(text.length);
    }

    function findLenght() {
        let str = text.replace(/\s+/g,' ').trim();
        let arr = str.split().length;

        return arr;
    }

    let lightMode = {
        btn : 'bg-green-600 border-2 border-black hover:bg-black',
        textareaBg : 'bg-green-200  border-green-600 border-2'
    };
    
    let darkMode = {
        btn : 'bg-black border-2  border-green-600 hover:bg-green-500',
        textareaBg : 'bg-slate-700'
    };

    let list = props.mode==='light'?lightMode:darkMode;
    
    return (
    <>
        <label htmlFor="textarea" className='text-xl font-bold'>Enter Your text here</label>
        <textarea name="textarea" id="textarea" value={text} onChange={onChangeHandle} cols="70" rows="8" className={`p-2 mb-3 rounded-md ${list.textareaBg}`} ></textarea>
        <div className='flex w-full justify-evenly'>
            <button onClick={convertUpper} className={`px-2 py-1 text-xs text-white ${list.btn} rounded-md`}>Uppercase</button>
            <button onClick={convertLower} className={`px-2 py-1 text-xs text-white ${list.btn} rounded-md`}>Lowercase</button>
            <button onClick={trimSpace} className={`px-2 py-1 text-xs text-white ${list.btn} rounded-md`}>Remove space</button>
            <button onClick={clearText} className={`px-2 py-1 text-xs text-white ${list.btn} rounded-md`}>Clear Text</button>
        </div>

        <div className='flex my-2 text-slate-800'>
            <h2 className='mx-2 font-bold'>Description :</h2>
            <p >{findLenght()} words and {text.length} characters</p>
            
        </div>
    </>
    )
}

