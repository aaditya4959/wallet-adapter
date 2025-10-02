// Read about context api, providers in react
import './App.css'
import React, {useMemo} from 'react'
import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react'
import { WalletModalButton, WalletMultiButton, WalletDisconnectButton, WalletModalProvider, WalletConnectButton} from "@solana/wallet-adapter-react-ui"
import {clusterApiUrl} from "@solana/web3.js"
import { Airdrop } from "./Airdrop"

function App() {
  

  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/7jQJ_Wy-lYcEXbgPyBWrg"}>
      <WalletProvider wallets={[]} autoConnect> 
        <WalletModalProvider>


          <div>Wallet Adapter</div>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <Airdrop/>


        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
    
  )
}

export default App
