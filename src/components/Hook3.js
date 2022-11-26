import React,{useState,useRef} from 'react'

export default function Hook3() {
    var[name,setName]=useState('Nilesh');
    var[age,setAge]=useState(20);
    var[hobbies,setHobbies]=useState(['cricket','football']);
    var[info,setInfo]=useState({place:'mumbai',degree:'Graduate'});

    var x1=useRef();

    var myfunc = function(){
        setName('Nilesh Alakri');
        setAge(21);
        setHobbies([...hobbies,'swimming','reading']);
        setInfo({...info,role:x1.current.value})
        console.log(info);
        console.log(x1.current.value);
    }

  return (
    <div className="container">
    <div>Hook3 Example</div>
    <p>
       Name:{name}
    </p>
    <p>
       Age:{age}
    </p>
    <p>
       Hobbies:
       <ol>
       {
        hobbies.length>0 && hobbies.map(val=>
            <li>{val}</li>)
       }
       </ol>
       
    </p>
    <p>
    Place:{info.place}
    </p>
    <p>
    Degree:{info.degree}
    </p>
    <p>
       Role:{info.role}
    </p>
    <p>
    <input type="text" ref={x1}/>
    <button onClick={myfunc}>Enter</button>
    </p>
    </div>
  )
}




