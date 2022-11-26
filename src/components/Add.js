import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Add() {
  var x1=useRef();
  var x2=useRef();
  var x3=useRef();
  var x4=useRef();
  var x5=useRef();

  let navigate = useNavigate();



  var myfunc=()=>{
    console.log(x1);
    var data={
      title : x1.current.value,
      price : x2.current.value,
      description : x3.current.value,
      category : x4.current.value,
      image:x5.current.value, 
    }
    console.log(data);

    axios.post("http://localhost:3004/products",data).then(res=>{
      navigate("/show")
    })
  }

  return (
    <div className="container">
      <h1>ADD PRODUCT DATA</h1>
      <input type="text" ref={x1} className="form=control" /> <br />
      <input type="text" ref={x2} className="form=control" /> <br />
      <input type="text" ref={x3} className="form=control" /> <br />
      <input type="text" ref={x4} className="form=control" /> <br />
      <input type="text" ref={x5} className="form=control" /> <br />
      <button onClick={myfunc}>Add</button>
    </div>

  )
}
