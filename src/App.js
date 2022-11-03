import logo from './logo.svg';
import './App.css';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  lightTheme, midnightTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import React, { useState, useEffect } from 'react'
import ConnectWallet from './components/connect-wallet';
import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
import { SessionProvider } from 'next-auth/react';
import AddRecentTransaction from './components/add-recent-transaction';
import { ModalHooks } from './components/modal-hooks';
import ChangeTheme from './components/change-theme';
import Navbar from './components/navbar';


const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),

    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function App() {

  const [theme, setTheme] = useState("lightTheme")
  const changeThemeHandler = (theme) => {
    setTheme(theme)

  }
  const [connected, setConnected] = useState(false)
  const [call, setCall] = useState(false)
  const checkConnection = () => {

    const data = JSON.parse(JSON.parse(localStorage.getItem('wagmi.store')))
    console.log("running", Object.keys(data.state.data).length)
    if (Object.keys(data.state.data).length > 0) {
      if (data?.state?.data?.account) {
        setCall(prevState => !prevState)
        setConnected(true)
      }
    }
    else {
      console.log("inside else")
      setCall(prevState => !prevState)
      setConnected(false)
    }
  }

  useEffect(() => {
    setConnected(connected)
  }, [call])

  return (
    <div className="App">
      <Navbar connected={connected}></Navbar>
      <WagmiConfig client={wagmiClient}>

        <RainbowKitProvider chains={chains} modalSize="compact" initialChain={chain.goerli} theme={theme === "lightTheme" ? lightTheme() : theme === "darkTheme" ? darkTheme() : theme === "midnightTheme" ? midnightTheme() : lightTheme()} showRecentTransactions={true} appInfo={{
          appName: 'Rainbowkit Application'
        }} coolMode>
          <ConnectWallet checkConnection={checkConnection}></ConnectWallet>
          {/* <AddRecentTransaction></AddRecentTransaction> */}
          <ModalHooks></ModalHooks>
          <ChangeTheme changeThemeHandler={changeThemeHandler}></ChangeTheme>
        </RainbowKitProvider>

      </WagmiConfig>
    </div>
  );
}

export default App;
