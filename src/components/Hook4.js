import React,{useState,useEffect} from 'react'

export default function Hook4() {
    var[count,setCount]=useState(0);
    var[number,setNumber]=useState(100);

    //  this is working as a componentDidUpadate
    // useEffect(()=>{
    //     console.log('USE EFFECT CALLED',count);
    // })

    //this is working as a componentDidMount
    // useEffect(()=>{
    //     console.log('USE EFFECT CALLED',count);
    // },[])

    // if there is a change in state variable number

    // useEffect(()=>{
    //     console.log('USE EFFECT CALLED',count);
    // },[number])

    useEffect(()=>{
        console.log('USE EFFECT CALLED', count);
        return()=>{
            console.log('WILL UNMOUNT CYCLE');
            
        }
        
    },[])

    var myfunc =()=>{
        setCount( count+1 )
    }
    var myfunc1 =()=>{
        setNumber( 200 )
    }
  return (
    <div className="container">
    <div>Hook4</div>
    <p>COUNT:{count}</p>
    <p>Number:{number}</p>
    <button onClick={myfunc}>Change Count</button>
    <button onClick={myfunc1}>Change Number</button>
    </div>

  )
}
