import React from 'react'

function Greetings(props) {
  return (
    <div>
     <h2>Greetings</h2>
   
     {props.lang === "de" ? "Hallo " + props.children : "Bonjour " + props.children}
    
    </div>
  )
}

export default Greetings