import React from 'react'
import './landing.css'

function Landing(props) {
    const { name} = props
    return (
        <div>
            <div className='landing_innerContainer'>
                <div className='landing_info'>
                    <h1 className='landing_heading'>I’m <span className='special_heading'>{props.name}</span>, & I create equitable platforms for the new economy.</h1>
                    <div className='stand_box'>
                        <span className='border'></span>
                        <p className='standbox_title'>WHAT I STAND FOR:</p>
                        <div className='tags'>
                            <p>#COLLOBORATION</p>
                            <p>#Equity</p>
                            <p>#impact</p>
                            <p>#decentralization</p>
                            <p>#education</p>
                        </div>
                    </div>
                    <div className='animation_region'>
                        <div className='anim'>
                            <div className="inner_anim">
                            <p className='top_hide'>Region</p>
                            <p className='special_hide'>Latin America</p>
                            </div>
                          
                        </div>
                        <div className='anim'>
                        <div className="inner_anim">
                            <p className='top_hide'>Web 3 Category</p>
                            <p className='special_hide'>Web3 Founder</p>
                        </div>
                        </div>
                        <div className='anim'>
                        <div className="inner_anim">
                            <p className='top_hide'>Organization Affiliations</p>
                            <p className='special_hide'>Web3 Founder</p>
                        </div>
                        </div>
                        <div className='anim'>
                        <div className="inner_anim">
                            <p className='top_hide'>Community Affiliations</p>
                            <p className='special_hide'>Crypto Female, web 3 ladies, Web 3 Kirgizstan</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='landing_img'>
                    <div className='img_name'>
                        <p>Kara Howard</p>
                        <small>(SHE/HER)</small>
                    </div>

                </div>
            </div>
            
<div className="marquee">
  <div className="track">
    <div className="content">
    <h1>~ Collaborative web3-4 </h1>
                    <h1>~ Focused</h1>
                    <h1>~ decentralizing currencies & technologies</h1>

                    <h1>~ Collaborative web3-4 ecosystem growth</h1>
                    <h1>~ Focused</h1>
                    <h1>~ decentralizing currencies & technologies</h1>
    </div>
  </div>
</div>

        </div>
    )
}

export default Landing