import React,{useState} from 'react';
import { factorial } from 'mathjs';

export default function TextForm(){
    const [text,setText] = useState('');
    const [rank,setRank] = useState('');

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
        <div className='container'>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn-btn-primary mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn-btn-primary mx-2' onClick={handleDownClick}>Convert to Lowercase</button>
        <button className='btn-btn-primary mx-2>Word Rank' onClick={handleWordRank}>Word Rank</button>
        </div>
        <div className='container my-3'>
            <h1>Text summary</h1>
            <p>Characters: {text.length}, words: {text.split(" ").length} </p>
            <p>{0.08 * text.split(" ").length} Expected Read time</p>
            <h2>Preview</h2>
            <p>{text}</p>
            <h2>Word Rank</h2>
            <p>{rank}</p>
        </div>
        </>
    )
}
