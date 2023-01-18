import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const[mode, setMode]=useState('light')
  const toggleMode=()=>{
    if(mode=='dark'){
      setMode('light');
      document.body.style.background='white'
    }else{
      setMode('dark');
      document.body.style.background='grey'
    }
  }
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    {/* <About/> */}
    
    </> 
  );
}

export default App;
