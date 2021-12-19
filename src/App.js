import  Navbar from './components/Navbar'
import TextComponent from './components/TextComponent';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {

  // to switch between light and dark mode
  let darkMode = {
    mainBg : 'bg-slate-900',
    contentBg : 'bg-slate-900',
    text : 'text-white',
  }
  let lightMode = {
    mainBg : 'bg-green-100',
    contentBg : 'bg-green-300',
    text : ''
  }
  const [mode, setMode] = useState('light');  
  const [list, setList] = useState(lightMode);
  const [alert, setAlert] = useState(null);

  const displayAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
  };

  function toggleMode(){
    if( mode==='light' ) {
      setMode('dark');
      setList(darkMode);
      displayAlert('Dark Mode Enabled','success');
    }
    else {
      setMode('light');
      setList(lightMode);
      displayAlert('Light Mode Enabled','success');
    }
  }


  return (
<>
  
    <Navbar title='TextUtil' initials='TU' mode={mode} change={toggleMode}/>
    {alert && <Alert alert={alert} setAlert={setAlert} />}
    
    <main className={`flex justify-around p-4 ${list.mainBg} ${list.text}`} >
      <div id='content' className={`flex flex-col items-center  flex-grow h-screen p-4 rounded-md  ${list.contentBg}`}>
        <TextComponent mode={mode}/>
      </div>
    </main>
</>
  );
}

export default App;
