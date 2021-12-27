import React from 'react'
import axios from 'axios'
import './TodoItem.css'
const TodoItem = (props) => {

    const deleteTodo = () => {
        axios.delete(`http://localhost:4000/posts/${props.id}`)
        .then(function(){
            props.deleteTodo();
        }).catch(function() {
            alert('Not able to delete');
        })
    }

    return (
        <div className='todoItem'>
            
            <p>{props.title}</p>
            <button onClick={deleteTodo} >Delete</button>

        </div>
    )
}

export default TodoItem
