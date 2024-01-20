import React from 'react'
import { useState } from 'react'
import eye from '../eye_logo.png'
import './navbar.css'

function Navbar() {
  const[btnstate, setbtn] = useState(false);

  function handelClick(){
      setbtn(btnstate=>!btnstate);
  }
  let checkClass = btnstate ? 'active':null;
  return (
    <div>
        <nav className={`nav ${checkClass}`}>
            <div className="logo">
                <img src={eye} alt="" />
                <h1>SI HER</h1>
            </div>

            <div className="menus">
                    <ul>
                        <li><a href="#value">Value</a></li>
                        <li><a href="#media">my media</a></li>
                        <li><a href="#vision">vision</a></li>
                        <li><a href="#cv">cv</a></li>
                        <li><a href="#connect">connect</a></li>
                    </ul>
            </div>

            <div className="connect-btn">
                    <button>Connect Your Wallet</button>
            </div>
            <div className='menu-toggler' onClick={handelClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </nav>
    
    </div>
  )
}

export default Navbar