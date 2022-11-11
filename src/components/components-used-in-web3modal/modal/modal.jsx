import React from 'react'
import "./modal.css"
import kaikas from "./kaikas.png"
import polygon from "./polygon.png"
const Modal = ({connectWalletButton}) => {
    return (
      <>
    <div className="container">
  <div className="interior">
    <a className="btn" href="#open-modal">Connect to wallet</a>
  </div>

<div id="open-modal" className="modal-window">
  <div>
    <a href="#" title="Close" className="modal-close">Close</a>
    <h1>Choose wallet</h1>
              <span className="kaikas-span" onClick={() => connectWalletButton("kaikas")}><img className='kaikas-icon' src={kaikas} alt="kaikas" /></span>
              <span className="polygon-span" onClick={()=>connectWalletButton("polygon")}><img className='polygon-icon' src={polygon} alt="polygon" /></span>
    <br/>
    
    
      
  </div>
</div>
            </div>
            </>
  )
}

export default Modal