import React , {useState , useRef} from 'react'
import PropTypes from 'prop-types'


export default function Textform(prop) {
    const [text, setText] = useState('');
    let wordlength = text.length
        if (wordlength === 0)
            wordlength = 0;
        else if (text[text.length-1]===' '){
            wordlength = text.split(/\s+/).filter((element)=>{return element.length!==0}).length
        }
        else{
            wordlength = text.split(/\s+/).filter((element)=>{return element.length!==0}).length
        }
    const upperCase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert("TEXT CONVERTED TO UPPERCASE",'success')
    }
    const lowerCase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        prop.showAlert("TEXT CONVERTED TO LOWERCASE",'success')
    }
    const Clear =()=>{
        let newText ='';
        setText(newText);
    }
    const Reverse =()=>{
        let newText ='';
        for (let i=text.length-1;i >= 0; i--){
            newText += text[i]
        }
        setText(newText);
        prop.showAlert("TEXT REVERSED",'success')
    }
    const selected = useRef(null)
    const Copy = () =>{
        selected.current?.select(text)
        navigator.clipboard.writeText(text);
        prop.showAlert("TEXT COPIED TO CLIPBOARD",'success')
    }
    const extraspaces = ()=>{ //need to understand it
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        prop.showAlert("EXTRASPACES REMOVED FROM TEXT",'success')
    }
    const handleOnChange =(event)=>{
        setText(event.target.value);

    }
    return (
        <>
        <div className='container my-3'>
            <div className="mb-2">
                <label htmlFor="textarea1" className="form-label"><h1>{prop.heading} </h1></label>
            </div>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textarea1" rows="6" ref={selected}></textarea>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={lowerCase} >CONVERT TO lowercase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={upperCase} >Convert to UPPERCASE</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={Clear} >CLEAR TEXT</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={Reverse} >REVERSE TEXT</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={Copy} >COPY TEXT</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-2 my-2" onClick={extraspaces} >REMOVE EXTRASPACE</button>
        </div>
        <div className="container">
            <h1>Your Text Summary</h1>
            <p>{wordlength} words and {text.length} characters </p>
            <h2>PREVIEW</h2>
            <p>{text.length>0?text:"Enter something above to Preview it here"}</p>
        </div>
        </>
    )
}

Textform.propTypes = {heading: PropTypes.string}