import React,{useState} from 'react';
import { factorial } from 'mathjs';

export default function TextForm(props){
    const [text,setText] = useState('');
    const [rank,setRank] = useState('');

    const handleUpClick = () => {
        console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success')
    }
    const handleDownClick =() =>{
        setText(text.toLowerCase());
        props.showAlert('Converted to Lowercase','success')

    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges(); // it will remove the highlighted text
    }
    const handleClear = () => {
        setText('');
    }
    const handleOnChange = (event) => {
        console.log('On-Change');
        setText(event.target.value);
    }
    const calculateRank = (word) => {
        let rank = 1;
        const n = word.length;
        for (let i = 0; i < n; i++) {
            let smallerCharsCount = 0;
            for (let j = i + 1; j < n; j++) {
                if (word[j] < word[i]) {
                    smallerCharsCount++;
                }
            }
            rank += smallerCharsCount * factorial(n - i - 1);
        }
        return rank;
    }
    const handleWordRank =() =>{
        if(text){
            const calculatedRank = calculateRank(text);
            setRank(calculatedRank);
        } else{
            setRank('');
        }
    }
    return(
        <>
        <div className='container' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Enter the text to analyze</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={handleDownClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
        <button disabled={text.length === 0} className='btn-btn-primary mx-2 my-2' onClick={handleWordRank}>Word Rank</button>

        </div>
        <div className='container my-3' style={{color : props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>Text summary</h1>
            <p>Characters: {text.length}, words: {text.split(/\s+/).filter((element)=> {return element.length!== 0}).length} </p>
            <p>{0.08 * text.split(" ").filter((element)=> {return element.length!== 0}).length} Expected Read time</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here'}</p>
            <h2>Word Rank</h2>
            <p>{rank}</p>
        </div>
        </>
    )
}
