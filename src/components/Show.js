import React,{useEffect,useState} from 'react'
import "../css/style.css"
import {Link} from 'react-router-dom';
import useAxios from '../useAxios';

export default function Show() {
  var ans =useAxios('http://localhost:3004/products');
  console.log(ans);
    // const [api,setApi]=useState([]);
    // useEffect(()=>{
    //     axios
    //     .get('http://localhost:3004/products')
    //     .then(res=>{
    //         console.log(res);
    //         console.log(res.data);

    //         setApi(res.data);
    //     });
    // },[])
  return (
    
    <div className="container">
    <h1>Show Data</h1>
    <div className="row">
    {
        ans && ans.length>0 && ans.map(val=>
            <div className="col-md-3 text-center">
            <img src={val.image} className='img-responsive pro-image' alt=''/>
            <h2>{val.price}</h2>
            <p>{val.title}</p>
            <p>{val.id}</p>
            <p>
            <button className='btn btn-warning'>Add To Cart</button>
            &nbsp;&nbsp;

            <Link to={"/single-product/"+val.id} className='btn btn-success'>Details</Link>
            </p>
            </div>
            )
    }
    </div>
    </div>
  )
}
