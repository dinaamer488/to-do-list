

import './App.css';
import { useRef, useState } from 'react';

function App() {

  const[x,setx]=useState([])
  const inputref=useRef()

  const add=()=>{
    const value=inputref.current.value;
    const newdata={completed:false , value}
    setx([...x , newdata])
    inputref.current.value=""
 
  }
  const done= (index)=>{
    const newx=[...x]
    newx[index].completed= ! newx[index].completed
    setx(newx)
  }
  const toDelet=(index)=>{
    const newx=[...x]
    newx.splice(index,1)
    setx(newx)
  }
  
  return (
    <div className="App">
     <h2>to do list</h2>

     <ul>
      {
        x.map(({value, completed} , index)=>{
         return <div className='div10'> 
         <li  className={completed?"style1":""}
         
         
         onClick={()=>done(index)}>{value}</li>
         <span onClick={()=>toDelet(index)}>x</span>
         </div>
        })
      }
     </ul>
     <input ref={inputref} placeholder='Enter new task' />
     <button onClick={add}>add</button>
    </div>
  );
}

export default App;