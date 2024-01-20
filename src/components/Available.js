import React from 'react'
import eye from '../eye.png'
import './available.css'
function Available() {
  return (
    <div className='available_container' id='connect'>
        <h1 className="available_heading">I’m available for</h1>

        <div className="avl_banner">
            <img src={eye} alt="" />
            <h1>speaking</h1>
            <img src={eye} alt="" />
            <h1>Advising</h1>
            <img src={eye} alt="" />
            <h1>Collabs</h1>
            <img src={eye} alt="" />
            <h1>speaking</h1>
            
        </div>

        <div className="avl_desc">
            <p> You are viewing an ENS domain, which is a distributed and open naming system based on the Ethereum blockchain. This website is hosted with Pinata on the IPFS, or InterPlanetary File System, which is a peer-to-peer file sharing network. The .limo domain extension is a privacy-preserving ENS gateway for resolving/accessing ENS records/domains & IPFS/internet 3.0 content. For a complete web3 experience, we recommend viewing this site with a Metamask extension or Brave browser. </p>
        </div>

        <div className="aval_btn">
            <p>This site has been built by Si3 in support of the decentralized and democratized web.</p>
        </div>


        <div className="footer">
            <div className="decentral">
                <a href="https://www.linkedin.com/in/decentralizing/">@decentralizing</a>
            </div>
            <div className="email">
                <p>kara@si-her.live</p>
            </div>
            <div className="newsletter">
                    <h1>Subscribe to Newsletter</h1>
                    <div className="email_box">
                    <input type="text" placeholder='Enter your email' />
                    <button type="submit">Subscribe</button>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Available