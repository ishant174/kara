import React from 'react'
import eye from '../eye_logo.png'
import './navbar.css'

function Navbar() {
  return (
    <div>
        <nav>
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
        </nav>
    
    </div>
  )
}

export default Navbar