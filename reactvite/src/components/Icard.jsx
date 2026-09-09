import React from 'react'

function ICard(props) {
  return (
    <div style = {{border:'10px solid red'}}>
      <h2>College:{props.college}</h2>
      <div>
        <img src = {props.pic} height = {200} width = {200}></img>
      </div>
      <h2>Roll:{props.roll}</h2>
      <h2>Name:{props.name}</h2>
      <h2>Branch:{props.branch}</h2>

    </div>
  )
}

export default ICard
