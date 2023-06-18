import React from 'react'
import Nav from './NavBar'
const AgeCalculator = () => {
    const calculate = ()=>{
        var date = new Date();
        let val = document.getElementById('Date').value;
        let y = val.split("-")[0];
        let m = val.split("-")[1];
        let d = val.split("-")[2];
        let ans = 2023 - y;
        if(6 - m < 0){
            ans = ans -1;
        }else if(6-m===0 && 20<d){
            ans = ans -1;
        }
        var dis = 'You are '+ans+' years old '
        document.getElementById('dis').innerHTML = dis
    }
  return (
    <div  className='my-auto'>
         <Nav/>
        <center><h1 className='my-3'> Age Calculator </h1></center>
        <center><h5 className='my-2'>Enter your date of birth</h5></center>
        <center><input type='date' id='Date' className='my-2'></input></center>
        <center><button onClick={calculate} className='my-2 btn btn-info'> Calculate Age </button></center>
        <center><h3 id='dis'></h3></center>
    </div>
  )
}

export default AgeCalculator