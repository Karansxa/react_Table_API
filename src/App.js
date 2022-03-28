import logo from './logo.svg';
import React, {useState, useEffect} from "react";
import axios from "axios";
import {getIn} from "timm";
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      const _data = getIn(response, ['data']) || [];
      console.log(_data);
      setData(_data);
    })
    .catch(err => console.log("Error", err));  
  }, [count]);
  const onClick = () => {
    setCount(count+1);
  }
  
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={onClick}>Clicke Me</button>
      {data.map(post =>{
        return (<table border="2">
          <tr>
            <td>Title</td>
            <td>Body</td>
          </tr>
          <tr>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        </table>)
      })}
    </div>
  );
}

export default App;