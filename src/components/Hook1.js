import React,{useState} from 'react'

export default function Hook1() {
    var xyz=useState("Nilya");
    console.log(xyz);
    var [username, setUsername]=useState("nilya")
    // console.log(setUsername);

var myfunc =()=>{
    console.log('func called');
    console.log('username');
    setUsername('Nilya new');
}
  return (
    <div>Hook1
    <hr/>
    {username}
    <button onClick={myfunc}>Change</button>
    </div>
  )
}
