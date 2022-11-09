import React,{useState} from 'react'



export default function TextForm(props) {
    const[text,setText]=useState("");
    // setText("New Text")

const handleClickUp=()=>{
let newText=text.toUpperCase(); 
    setText(newText)

}
const handleClickLower=()=>{
let newText=text.toLowerCase(); 
    setText(newText)

}
const handleClickClear=()=>{
let newText=''; 
    setText(newText)

}
const handleClickSpeech=()=>{
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg); 

}

const handleCopy = () =>{
let text = document.getElementById("myBox")
text.select()
navigator.clipboard.writeText(text.value)


}

const handleOnChange=(e)=>{
    setText(e.target.value);
    console.log("second")
}
return (
<>
<div className='container'  style={{color : props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
    {/* <h2>{props.heading}</h2> */}
  <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor : props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} value= { text} ></textarea>
</div>
<button className="btn btn-primary mx-1"  onClick={handleClickUp}>Convert Upper Case</button>
<button className="btn btn-primary mx-1" onClick={handleClickLower}>Convert Lower Case</button>
<button className="btn btn-primary mx-1" onClick={handleClickClear}> Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleClickSpeech}> Speak It</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}> Copy It</button>
</div>
<div className="container my-2" style={{color : props.mode==='dark'?'white':'black'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} Words , {text.length}chararcters</p>
<h5>{Math.round(text.split(" ").length*0.008)}Minutes Read</h5>
<h3>Preview</h3>
<h5>{text}</h5>
</div>
</>
  )
}
 