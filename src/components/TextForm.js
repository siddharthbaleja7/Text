import React,{useState} from 'react';

export default function TextForm(){
    const [text,setText] = useState('Enter the text here');

    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick =() =>{
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) => {
        console.log('On-Change');
        setText(event.target.value);
    }
    return(
        <>
        <div className='container'>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn-btn-primary ' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn-btn-primary ' onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
            <h1>Text summary</h1>
            <p>Characters: {text.length}, words: {text.split(" ").length} </p>
        </div>
        </>
    )
}
