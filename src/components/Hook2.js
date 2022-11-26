import React ,{useState,useRef} from 'react'

export default function Hook2() {
    var[fname,setFname]=useState('aa');
    var[lname,setLname]=useState('ab');

    var x1=useRef();
    var x2=useRef();
    var myfunc = ()=>{
        console.log(x1);
        console.log(x2);
        console.log(x1.current.value);
        console.log(x2.current.value);
        setFname(x1.current.value);
        setLname(x2.current.value);
    }
  return (
    <div>Hook2
    <br />
    <input type="text" ref={x1}/><br />
    <input type="text" ref={x2}/><br />
    <button onClick={myfunc}>getvalue</button>
    <hr />
    {fname},{lname}
    </div>
  )
}
