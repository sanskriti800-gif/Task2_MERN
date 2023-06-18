import React from 'react'
import './styles.css'
import { useState } from 'react';
import Nav from './NavBar'
function ColorPicker() {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];
    const [toggle, setToggle] = useState(true);
    const colorPickerBtn = document.getElementById('colorPickerBtn');
    const colorList = document.getElementById('colorList');
    const Toggling = () => {
        if (toggle) {
            handleClick();
        } else {
            handleClose();
        }
        setToggle(!toggle);
    }
    const handleClick = () => {
        colorList.style.display = 'block';
        colors.forEach(function (color) {
            const colorItem = document.createElement('li');
            colorItem.classList.add('color-item');
            colorItem.style.backgroundColor = color;

            colorItem.addEventListener('click', function () {
                colorPickerBtn.style.backgroundColor = color;
                colorList.style.display = 'none';
            });

            colorList.appendChild(colorItem);
        });
    };

    const handleClose = () => {
        colorList.style.display = 'block';
        document.getElementById('colorList').innerHTML = ''
    }
    return (
        <div>
            <Nav />
            <div className="color-picker mx-5">
                <button id="colorPickerBtn" onClick={Toggling}>Pick a color</button>
                <ul id="colorList" className="color-list"></ul>
            </div>
        </div>
    )
}

export default ColorPicker