import Web3 from 'web3';

import { useState, useEffect } from 'react';
import Modal from "./components/components-used-in-web3modal/modal/modal"
import DisplayDetails from './components/components-used-in-web3modal/display-details/displayDetails';

function App() {
    const [account, setAccount] = useState("")
    const [polygon, setPolygon] = useState({ chainName: "", chainId: 0, rpcUrl: "" })
    const runtime = "test"

    useEffect(() => {


        console.log(runtime, runtime === "PRODUCTION");
        if (runtime === "PRODUCTION") {
            setPolygon({ chainName: "Polygon Mainnet", chainId: 137, rpcUrl: 'https://polygon-rpc.com/' })
        }
        else {
            setPolygon({ chainName: "Polygon Testnet", chainId: 80001, rpcUrl: 'https://rpc-mumbai.maticvigil.com/' })
        }


    }, [])

    async function connectWallet(wallet) {
        const web3 = new Web3()
        if (wallet === "kaikas") {
            const kaikas = window.klaytn
            const accounts = await kaikas.enable()
            setAccount(accounts[0])
        }
        else if (wallet === "polygon") {
            const web3 = new Web3()
            if (window.ethereum.networkVersion !== polygon.chainId) {
                try {

                    await window.ethereum.request({
                        method: 'wallet_switchEthereumChain',
                        params: [{ chainId: web3.utils.toHex(polygon.chainId) }]
                    });
                    window.ethereum.enable()
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setAccount(accounts[0])
                } catch (err) {
                    // If chain is not added , then add polygon network
                    if (err.code === 4902) {
                        await window.ethereum.request({
                            method: 'wallet_addEthereumChain',
                            params: [
                                {
                                    chainName: polygon.chainName,
                                    chainId: web3.utils.toHex(polygon.chainId),
                                    nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
                                    rpcUrls: [polygon.rpcUrl]

                                }
                            ]
                        });
                    }
                }
            }

        }

    }




    return (
        <div>
            {!account && <Modal connectWalletButton={connectWallet}></Modal>}
            {account && <DisplayDetails setAccount={setAccount} account={account}></DisplayDetails>}

        </div>
    )
}

export default App;