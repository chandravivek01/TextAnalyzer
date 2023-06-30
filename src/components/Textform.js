import React, { useState } from 'react'

export default function Textform() {

    const [text, setText] = useState('');

    let handleEvent = (event) => {
        setText(event.target.value);
    };

    let toUpper = () => {
        setText(text.toUpperCase());
    };

    let toLower = () => {
        setText(text.toLowerCase());
    };

    let clearText = () => {
        setText('');
    };

    return (
        <>
            <div className="mb-3 my-3">
                <h1>Type-in your content below ...</h1>
                <textarea className="form-control my-3" value={text} onChange={handleEvent} rows="8" placeholder='Put your content here ...'></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-2" onClick={toUpper}>UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={toLower}>LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            <h3 className='my-4'>Your text Summary</h3>
            <p className='my-1'>Your content has {text.split(' ').length} words and {text.length} characters.</p>
            <p className='my-1'>{text.split(' ').length * 0.008} minutes read.</p>
        </>
    )
}
