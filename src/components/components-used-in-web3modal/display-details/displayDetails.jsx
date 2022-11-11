import React from 'react'

const DisplayDetails = ({setAccount , account}) => {
  return (
      <div className='container'>
          <div className="inner-container">
              <div className="head">
                  Account : {account}
              </div>
              <div className='body'>
                  <div className="interior">
    <button className="btn_disconnect"  onClick={() => setAccount("")}>disconnect Wallet</button>
  </div>
                 
              </div>

          </div>
    </div>
  )
}

export default DisplayDetails