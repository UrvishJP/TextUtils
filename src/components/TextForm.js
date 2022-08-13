import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase", "success");
  }
  
  const handleLoclick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase", "success");

  }

  const handleClrlick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText)
  }

  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
 
  return (
  <>
  <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1 >{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div> 
    <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClrlick}>Clear Text</button>
  </div>
  <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>It will take {0.008*text.split(" ").length } minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
  )
} 
