import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCLearClick = () => {
        let newText = ""
        setText(newText)
    }
    const handleCapClick =()=>{
        let newText=text.charAt(0).toUpperCase() + text.slice(1)
        setText(newText)
    }
    const handleCopyClick=()=>{
        let copyText= document.querySelector('#myBox')
        navigator.clipboard.writeText(copyText.value);
        let newText=copyText.value;
        console.log(newText)
        setText(newText)
    }
    const handleExtraSpace =()=>{
        let newText=text.replace(/\s+/g, ' ').trim()
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("")
    const newStyle={
        backgroundColor:props.mode==='light'?'white':'grey',
        color:props.mode==='light'?'black':'white'
    }
    return (
        <>
            <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
                <div className="mb-3">
                    <label htmlfor="myBox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={newStyle} id="myBox" rows="8" placeholder='enter a text'></textarea>
                </div>
                <div className="mb-3 ">
                    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
                    <button className='btn btn-primary' onClick={handleCLearClick}>Clear the text</button>
                    <button className='btn btn-primary' onClick={handleCapClick}>Capitalize the text</button>
                    
                    <button className='btn btn-primary' onClick={handleCopyClick}>Copy to clickboard</button>
                    <button className='btn btn-primary' onClick={handleExtraSpace}>Remove extra space</button>
                </div>

            </div>
            <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter text to preview"}</p>
            </div>
        </>
    )
}
