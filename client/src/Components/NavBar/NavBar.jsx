import React , { useState } from 'react'
import './Home-Nav.css'


export default function NavBar() {
    const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked); 
  };
  const handleAboutClick = () => {
    setIsChecked(false);
  };
  return (
    <>
        <input type="checkbox" id="togglemenu" checked={isChecked}
          onChange={handleCheckboxClick}/>
        <header>
             <img src="../img/excelgymlogow.png" style={{height: '80px'}} alt=''/> 
            <h1>EXCEL GYM</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/facility">Trainers</a></li>
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="#aboutcontacts" onClick={handleAboutClick}>About</a></li> 
            </ul>
            <div class="menus">
                <a href="/signin" id="sign">Sign In</a>
                <div class="menuabutton">
                    <div class="menulogo">
                        <label for="togglemenu"></label>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
