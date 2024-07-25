import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState(""); //default text in the text box
    const handleUpper =()=>{
        console.log("upercase wass clicked");
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handleOnChage=(event)=>{
        setText(event.target.value);
    }

  return (
    <>
    
    <div className='container'>
        <div className="container my-3" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChage} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpper}>Convert to Upper</button>
        </div>
    
    </div>
    <div className='container my-3'>
        <h2>Preview</h2>
        <p>{text.split(" ").length} words, {text.length} characters.</p>
        <p>{text}</p>
    </div>
    
    </>
  )
}
