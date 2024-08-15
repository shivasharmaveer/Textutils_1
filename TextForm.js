import React, {useState} from 'react'


export default function TextForm(props) {

  const handleUpclick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLoclick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")

  }

   const handleClearclick = () => {
    // console.log("UpperCase was Clicked" + text);
    let newText = '';
    setText(newText);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  
  const handleOnclick = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  }; 

  const Ordering = () => {
    let match = /^/gm
    let entity = '>'
    let updated_text = text.replace(match, entity)
    setText(updated_text)  
}

const handlecapClick = ()=>{
  let capText = text.slice(0,1).toUpperCase() + text.slice(1, text.length)
  setText(capText)
}





const handleCopy = () => {
  var textElement = document.getElementById("myBox");
  textElement.select();
  navigator.clipboard.writeText(textElement.value);
}



  const [text, setText] = useState('');

  return (
  <div>
<div className="container" >
  <h1>{props.heading}</h1>
  {/* <label for="mybox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnclick} style={{backgroundColor: props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
  
<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear Text</button>
<button type="submit" className="btn btn-primary mx-2 my-2" onClick={speak} >Speak</button>
<button className="btn btn-primary mx-2 my-2"onClick={handleinverseclick}>Inverse</button>
<button className="btn btn-primary mx-2 my-2"onClick={Ordering}>Insert greater then</button>
<button className="btn btn-primary mx-2 my-2"onClick={handlecapClick}>Capitalise the 1st letter</button>
<button className="btn btn-primary mx-2 my-2"onClick={handleCopy}>Copy Text</button>



<div className='container my-3' style={{backgroundColor: props.mode==='light'?'grey':'white'}} id="myBox" rows="8">
   <h2>Your Text Summary</h2>
   <p>There are {text.split(" ").length} Words and {text.length} Characters</p>
   <p> <b>The Words were Read by me in {0.008 * text.split(" ").length} Minutes </b></p>

   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter Something To Preview it Here"}</p>
 
</div>


</div>

</div>
    
  )
}
  