import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./navbar.css"

const Navbar = ({ connected }) => {
    console.log(connected)
    const [isconnected, setIsConnected] = useState(connected)
    useEffect(()=>{setIsConnected(connected)},[connected])
    return (
      <>
    <header>
 <h1 className="logo">
  Rainbow Connect
 </h1>
 <nav>
  <button>Home</button>
  <button>Transactions</button>
  <button>About</button>
  <button>Contact</button>
 </nav>
                {!connected && <button className="order-online">wallet not connected</button>}
                {connected && <button className="order-online-two">wallet connected</button>}
</header>
<div>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(159, 90, 253,0.2)" />
<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(159, 90, 253,0.5)" />
<use xlinkHref="#gentle-wave" x="48" y="5" fill="lightpurple" />
<use xlinkHref="#gentle-wave" x="48" y="7" fill="purple" />
</g>
</svg>
            </div>
            </>
  )
}

export default Navbar