import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
      props.showAlert("converted to uppercase!","success");

    }
    const handleLoClick = () => {
      // console.log("lowercase was clicked"+text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase!","success");
  }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text,setText] = useState(" ");

    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success");
}
    

  return (
    <>
    <div className='container' style={{color: props.Mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div class="mb-3">
        
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor: props.Mode==='dark'?'grey':'white',color: props.Mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className ="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
            <button className= "btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>


    </div>
    <div className ="container my-3" style={{color: props.Mode==='dark'?'white':'#042743'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length} minutes read </p>
    
    <h2>Preview</h2>
    <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>

  )
}
