import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const[counter,setCounter]=useState(0);
    const[pointer, setPointer]=useState(100);

    function IncreaseCounter(){
        setCounter(counter+10);
    }

    function decreasePoniter(){
        setPointer(pointer-2);
    }

    useEffect(()=>{
        console.log("Counter= ",+counter);
        console.log("Pointer= ",+pointer);
    },[pointer,counter])
  return (
    <div>
        <h2>Counter app</h2>
        <h1 style={{color:"red"}}>Counter Value={counter}</h1>
        <h1 style={{color:"blue"}}>Pointer value={pointer}</h1>
        <button onClick={IncreaseCounter}>Increase Counter</button>
        <button onClick={decreasePoniter}>DEcrease pointer</button>
    </div>
  )
}

export default MyUseEffect