import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    function convert1() {
        console.log('Converting.....');
        let newText = text.toUpperCase();
        setText(newText);
    }

    function word() {
        if (text.length === 0) {
            return 0;
        }
        else {
            return text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
        }
    }
    function convert2() {
        console.log('Converting.....');
        let newText = text.toLowerCase();
        setText(newText);
    }

    function clear() {
        setText('');
    }

    function change(event) {
        console.log('Changing.....')
        setText(event.target.value);
    }

    function preview(text) {
        if (text === '') {
            return 'No text to preview';
        }
        else {
            return text;
        }
    }

   let copy=()=>
    {    
        navigator.clipboard.writeText(text);
    }

    let remove=()=>
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '))
    }
    return (
        <div className={`my-5 text-${props.Mode==='light'?'black':'white'}`}>
            <h3 style={{textShadow: '2px 2px 2px pink'}}>{props.heading}</h3>
            <div className="mb-3 my-4">
                <textarea className="form-control" onChange={change} id="exampleFormControlTextarea1" style={{backgroundColor: props.Mode==='light'?'white':'whitesmoke',color:'black'}} value={text} rows="5" placeholder='Enter Your Text here'></textarea>
            </div>
            <button className={`btn btn-${props.Mode==='light'?'primary':'danger'} mx-1 my-1`} disabled={text.length===0} onClick={convert1}>Convert to UpperCase</button>
            <button className={`btn btn-${props.Mode==='light'?'primary':'danger'} mx-1 my-1`} disabled={text.length===0} onClick={convert2}>Convert to LowerCase</button>
            <button className={`btn btn-${props.Mode==='light'?'primary':'danger'} mx-1 my-1`} disabled={text.length===0} onClick={clear}>Clear</button>
            <button className={`btn btn-${props.Mode==='light'?'primary':'danger'} mx-1 my-1`} disabled={text.length===0} onClick={copy}>Copy Text</button>
            <button className={`btn btn-${props.Mode==='light'?'primary':'danger'} mx-1 my-1`} disabled={text.length===0} onClick={remove}>Remove Extra Spaces</button>
            <h2 className='my-5' style={{textShadow: '2px 2px 2px pink'}}>Summary of Your Text</h2>
            <p>{word(text)} Words, {text.length} Characters</p>
            <p>{0.008 * word(text)} is time required to read complete paragraph</p>
            <h2 className='my-5' style={{textShadow: '2px 2px 2px pink'}}>Preview</h2>
            <p>{preview(text)}</p>
        </div>
    )
}
