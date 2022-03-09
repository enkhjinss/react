import React , { useState } from 'react';
import "../styles/snake.css"; 

// const refreshPage = () => {
//     window.location.reload(false);
// }\



const Count = () => {
    const [count , setCount] = useState(0);
  
    return (
        <div className='container'>
            <h1>You clicked {count} time!</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}
export default Count;

