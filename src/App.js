import logo from './logo.svg';
import './App.css';
import LoadingIndicator from './components/LoadingIndicator';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLatestList = () => {
    setLoading(true);
    axios.get('http://localhost:4000/posts')
      .then(function(obj){
          console.log(obj);
          setTodoList(obj.data);
          
          setLoading(false);
      }).catch(function() {
        setTodoList([{id:1, title:'Nothing found!!!'}])
        setLoading(false);
      })
  }



  useEffect(() => {
     axios.get('http://localhost:4000/posts')
          .then(function(obj){
              console.log(obj);
              setTodoList(obj.data);
              
              setLoading(false);
          }).catch(function() {
            setTodoList([{id:1, title:'Nothing found!!!'}])
            setLoading(false);
          })
    }
  , [])

  // axios.post('http://localhost:3000/posts', {})
  // axios.put('http://localhost:3000/posts/1', {})
  // axios.delete('http://localhost:3000/posts/1');
  return (
    <div className="App">
      {loading ? <LoadingIndicator/> :<div className='app_container'>
        <div className='app_todoContainer'>
            {todoList.map(item => <TodoItem deleteTodo={getLatestList}  title={item.title} key={item.id} id={item.id}/>)}

        </div>
        <Input updateList={getLatestList}/>
      </div>}
    </div>
  );
}

export default App;
