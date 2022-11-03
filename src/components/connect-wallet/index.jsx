
import React, { useState} from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./connectWallet.css"
import { useEffect } from 'react';

const ConnectWallet = ({checkConnection}) => {
    
        
    useEffect(()=>{checkConnection()},[])
    
    return (<>
        <div className="container">
            <div className="headingContainer" onMouseOver={checkConnection}>
      <h1 className="heading"><div className='lineOne'>Using connect wallet component of rainbowkit</div><div className='lineTwo'>To open modal </div></h1>
      
                 <div className="connect" >
                    <ConnectButton />
                </div>
            </div>
           
            </div>
      </>
  )
}

export default ConnectWallet