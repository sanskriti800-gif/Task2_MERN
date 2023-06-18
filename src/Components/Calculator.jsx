import React from 'react'
import Nav from './NavBar'
import { useState } from 'react'
import './styles.css'

const Calculator = () => {
    const [toogling , setToggling] = useState(false);
    const toggle = ()=>{
        if(!toogling){
            document.getElementById("d1").style.backgroundColor = '#fff';
            document.getElementById("display").style.color = "#000";
            document.getElementById("d2").style.backgroundColor = '#fff';
            document.getElementById("display-answer").style.color = "#000";
        }
        if(toogling){
            document.getElementById("d1").style.backgroundColor = 'rgb(6, 1, 126)';
            document.getElementById("display").style.color = "#fff";
            document.getElementById("d2").style.backgroundColor = 'rgb(6, 1, 126)';
            document.getElementById("display-answer").style.color = "#fff";
        }
        setToggling(!toogling);
    }

    const one = () => {
        var value = document.getElementById('display').innerText + 1;
        document.getElementById('display').innerText = value;

    }
    const two = () => {
        var value = document.getElementById('display').innerText + 2;
        document.getElementById('display').innerText = value;

    }
    const three = () => {
        var value = document.getElementById('display').innerText + 3;
        document.getElementById('display').innerText = value;

    }
    const four = () => {
        var value = document.getElementById('display').innerText + 4;
        document.getElementById('display').innerText = value;

    }
    const five = () => {
        var value = document.getElementById('display').innerText + 5;
        document.getElementById('display').innerText = value;

    }
    const six = () => {
        var value = document.getElementById('display').innerText + 6;
        document.getElementById('display').innerText = value;

    }
    const seven = () => {
        var value = document.getElementById('display').innerText + 7;
        document.getElementById('display').innerText = value;

    }
    const eight = () => {
        var value = document.getElementById('display').innerText + 8;
        document.getElementById('display').innerText = value;

    }
    const nine = () => {
        var value = document.getElementById('display').innerText + 9;
        document.getElementById('display').innerText = value;

    }
    const div = () => {
        var value = document.getElementById('display').innerText + "/";
        document.getElementById('display').innerText = value;

    }
    const sub = () => {
        var value = document.getElementById('display').innerText + "-";
        document.getElementById('display').innerText = value;

    }
    const mul = () => {
        var value = document.getElementById('display').innerText + "*";
        document.getElementById('display').innerText = value;

    }
    const add = () => {
        var value = document.getElementById('display').innerText + "+";
        document.getElementById('display').innerText = value;

    }
    const zero = () => {
        var value = document.getElementById('display').innerText + 0;
        document.getElementById('display').innerText = value;

    }
    const cal = () => {
        var arr = document.getElementById('display').innerText;
        if(arr.includes('÷')){
            var temp = arr.split('÷');
            var one = Number(temp[0]);
            var two = Number(temp[1]);
            document.getElementById('display-answer').innerText = one/two;

        }else if(arr.includes('+')){
            var temp = arr.split('+');
            var one = Number(temp[0]);
            var two = Number(temp[1]);
            document.getElementById('display-answer').innerText = one+two;

        }else if(arr.includes('-')){
            var temp = arr.split('-');
            var one = Number(temp[0]);
            var two = Number(temp[1]);
            document.getElementById('display-answer').innerText = one-two;
            
        }else if(arr.includes('*')){
            var temp = arr.split('*');
            var one = Number(temp[0]);
            var two = Number(temp[1]);
            document.getElementById('display-answer').innerText = one*two;
            
        }
        // document.getElementById('display-answer').innerText = one;
    }
    const del = () => {
        var dis = document.getElementById('display').innerText;
        var newdis = dis.slice(0,dis.length-1)
        document.getElementById('display').innerText = newdis;
    }


    return (
        <div  className='m-auto'>
             <Nav/>
             <center><h1 className='my-4'> Toggling Calculator </h1></center>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <div id="d1"style={{ border: 'solid 1px #000', width: '207.5px', height: '75px', margin: 'auto', borderBottom: 'none', backgroundColor: 'rgb(6, 1, 126)' }}>
                    <h1 id='display'> </h1>
                </div>
                <div id="d2"style={{ border: 'solid 1px #000', width: '207.5px', height: '75px', margin: 'auto', borderBottom: 'none', backgroundColor: 'rgb(6, 1, 126)', borderTop:'none' }}>
                    <h1 id='display-answer'> Result</h1>
                </div>
                <div>
                    <table style={{ border: 'solid 1px #000', width: '100px', height: '200px', margin: 'auto', borderTop: 'none', backgroundColor:'rgb(3, 1, 54)' }} id="table">
                        <tr className='cal-d'><td ><button onClick={del} id='cal-d'>del</button></td><td><button onClick={toggle} id='cal-d'>theme</button></td></tr>
                        <tr className='cal-d'>
                            <td><button onClick={seven} className='cal-d'>7</button></td>
                            <td><button onClick={eight} className='cal-d'>8</button></td>
                            <td><button onClick={nine} className='cal-d'>9</button></td>
                            <td><button onClick={div} className='cal-d'>÷</button></td>
                        </tr>
                        <tr className='cal-d'>
                            <td><button onClick={four} className='cal-d'>4</button></td>
                            <td><button onClick={five} className='cal-d'>5</button></td>
                            <td><button onClick={six} className='cal-d'>6</button></td>
                            <td><button onClick={mul} className='cal-d'>×</button></td>
                        </tr>
                        <tr className='cal-d'>
                            <td><button onClick={one} className='cal-d'>1</button></td>
                            <td><button onClick={two} className='cal-d'>2</button></td>
                            <td><button onClick={three} className='cal-d'>3</button></td>
                            <td><button onClick={sub} className='cal-d'>-</button></td>
                        </tr>
                        <tr className='cal-d' >
                            <td><button onClick={zero} className='cal-d'>0</button></td>
                            <td><button>.</button></td>
                            <td><button onClick={cal} className='cal-d'>=</button></td>
                            <td><button onClick={add} className='cal-d'>+</button></td>
                        </tr>

                    </table>
                </div>

            </div>
        </div>
    )
}

export default Calculator