import React from 'react'
import Nav from './NavBar'

const Counter = () => {
    const val = ()=>{
        const count = document.getElementById('counter-text').value.split(" ").length;
        const display = 'Word count '+(count-1)
        document.getElementById('counter-val').innerHTML = display;
    }
  return (
    <div className='counter m-auto'>
        <Nav/>
        <center><h1>Responsive Paragraph Word Counter</h1></center>
        <center><textarea id='counter-text' onChange={val} style={{width:'400px',height:'100px',borderRadius:'8px',padding:'8px', margin:'10px 0px'}}></textarea></center>
        <center><h2 id='counter-val'></h2></center>
    </div>
  )
}

export default Counter