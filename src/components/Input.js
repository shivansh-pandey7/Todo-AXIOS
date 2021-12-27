import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './input.css'

const Input = (props) => {
    const [input, setInput] = useState('');
    const onAdd = () => {
        axios.post('http://localhost:4000/posts', {title:input})
            .then(function(){
                props.updateList();
            })
            .catch(function(){
                alert('Error Occured');
            })
            setInput('');
    }
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => {setInput(e.target.value)}}/>
            <button onClick={onAdd}>Add!</button>
        </div>
    )
}

export default Input;
