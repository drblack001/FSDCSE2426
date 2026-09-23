import React, { useState } from 'react'

function ImageManipulation() {
    const[Catheight , setHeight]=useState(200);
    const[Catwidth , setweidth]=useState(200);
    const[red, setred]=useState(0);
    const[green, setgreen]=useState(0);
    const[blue, setblue]=useState(0);

    function IncreaseHeight(){
        setHeight(Catheight+10)
    }
    function IncreaseWidth(){
        setweidth(Catwidth+10)
    }
    function Reset(){
        setHeight(200)
        setweidth(200)
        setred(0)
        setblue(0)
        setgreen(0)
    }
    function Change(){
        setred(Math.random()*255)
        setblue(Math.random()*255)
        setgreen(Math.random()*255)
    }
  return (
    <div>ImageManipulation

        <div style={{backgroundColor:`rgb(${red},${green}, ${blue})`,height:'300px' , width:'300px', border:'2px solid red' , margin:'auto' ,}}>
            <img src="https://imgs.search.brave.com/83iznj1fgv-kBnb3PwHE0jXJ35XavtSHWB9TbqSqNYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTQuZ2lwaHkuY29t/L21lZGlhL3YxLlky/bGtQVGM1TUdJM05q/RXhhWGRuWXpGNmVE/WXhhbVZsWlhsbVlt/cDBlR1ZyTkhkb05H/UjRkamx4TTNWaE1t/dHBhMkU1TlNabGNE/MTJNVjluYVdaelgz/TmxZWEpqYUNaamRE/MW4vM283YnUxMkdI/bTRHNWZybjZVLzIw/MC5naWY.gif" alt="" height={Catheight} width={Catwidth}  />
        </div>
        <div><br />
            <button onClick={IncreaseHeight}>IncreAse Height</button><br />
            <button  onClick={IncreaseWidth}>increase width</button><br />
            <button onClick={Reset}>Reset</button><br />
            <button onClick={Change}>Change BAckground</button>
        </div>

    </div>

  )
}

export default ImageManipulation;