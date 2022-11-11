// import logo from './logo.svg';
// import './App.css';
// import '@rainbow-me/rainbowkit/styles.css';
// import {
//   getDefaultWallets,
//   RainbowKitProvider,
//   darkTheme,
//   lightTheme, midnightTheme, connectorsForWallets, wallet
// } from '@rainbow-me/rainbowkit';
// import {
//   chain,
//   configureChains,
//   createClient,
//   WagmiConfig,
// } from 'wagmi';
// import { metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';


// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
// import React, { useState, useEffect } from 'react'
// import ConnectWallet from './components/connect-wallet';
// import { RainbowKitSiweNextAuthProvider } from '@rainbow-me/rainbowkit-siwe-next-auth';
// import { SessionProvider } from 'next-auth/react';
// import AddRecentTransaction from './components/add-recent-transaction';
// import { ModalHooks } from './components/modal-hooks';
// import ChangeTheme from './components/change-theme';
// import Navbar from './components/navbar';
// import {
//   Chain,
//   Wallet,
//   getWalletConnectConnector,
// } from '@rainbow-me/rainbowkit';
// // export interface MyWalletOptions {
// //   chains: Chain[];
// // }
// import {
//   injectedWallet,
//   rainbowWallet,
//   walletConnectWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// const { chains, provider } = configureChains(
//   [chain.mainnet, chain.goerli],
//   [
//     alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),

//     publicProvider()
//   ]
// );
// metaMaskWallet(options: {
//   chains: Chain[];
//   shimDisconnect?: boolean;
// });
// export const rainbow = ({ chains }) => ({
//   id: 'kaikas',
//   name: 'Kaikas',
//   iconUrl: 'https://my-image.xyz',
//   iconBackground: '#0c2f78',
//   downloadUrls: {

//     desktop: " https://public-node-api.klaytnapi.com/v1/cypress"
//   },
//   createConnector: () => {
//     const connector = getWalletConnectConnector({ chains });
//     return {
//       connector,
//       mobile: {
//         getUri: async () => {
//           const uri = " https://public-node-api.klaytnapi.com/v1/cypress"
//           // console.log(uri)
//           return uri;
//         },
//       },
//       qrCode: {
//         getUri: async () =>
//           (await connector.getProvider()).connector.uri,
//         instructions: {
//           learnMoreUrl: 'https://my-wallet/learn-more',
//           steps: [
//             {
//               description:
//                 'We recommend putting My Wallet on your home screen for faster access to your wallet.',
//               step: 'install',
//               title: 'Open the My Wallet app',
//             },
//             {
//               description:
//                 'After you scan, a connection prompt will appear for you to connect your wallet.',
//               step: 'scan',
//               title: 'Tap the scan button',
//             },
//           ],
//         },
//       },
//     };
//   },
// });


// // const { connectors } = getDefaultWallets({
// //   appName: 'My RainbowKit App',
// //   chains
// // });
// const connectors = connectorsForWallets([
//   {
//     groupName: 'Recommended',
//     wallets: [
//       rainbow({ chains }),
//       rainbowWallet({ chains }),


//     ],
//   },
// ]);
// const wagmiClient = createClient({
//   autoConnect: true,
//   connectors,
//   provider
// })


// function App() {
//   console.log(window['klaytn'])
//   const [theme, setTheme] = useState("lightTheme")
//   const changeThemeHandler = (theme) => {
//     setTheme(theme)

//   }
//   const [connected, setConnected] = useState(false)
//   const [call, setCall] = useState(false)
//   const checkConnection = () => {

//     const data = JSON.parse(JSON.parse(localStorage.getItem('wagmi.store')))
//     console.log("running", Object.keys(data.state.data).length)
//     if (Object.keys(data.state.data).length > 0) {
//       if (data?.state?.data?.account) {
//         setCall(prevState => !prevState)
//         setConnected(true)
//       }
//     }
//     else {
//       console.log("inside else")
//       setCall(prevState => !prevState)
//       setConnected(false)
//     }
//   }

//   useEffect(() => {
//     setConnected(connected)
//   }, [call])

//   return (
//     <div className="App">
//       <Navbar connected={connected}></Navbar>
//       <WagmiConfig client={wagmiClient}>

//         <RainbowKitProvider chains={chains} initialChain={chain.goerli} theme={theme === "lightTheme" ? lightTheme() : theme === "darkTheme" ? darkTheme() : theme === "midnightTheme" ? midnightTheme() : lightTheme()} showRecentTransactions={true} appInfo={{
//           appName: 'Rainbowkit Application'
//         }} coolMode>
//           <ConnectWallet checkConnection={checkConnection}></ConnectWallet>
//           {/* <AddRecentTransaction></AddRecentTransaction> */}
//           <ModalHooks></ModalHooks>
//           <ChangeTheme changeThemeHandler={changeThemeHandler}></ChangeTheme>
//         </RainbowKitProvider>

//       </WagmiConfig>
//     </div>
//   );
// }

// export default App;
