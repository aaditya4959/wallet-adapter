import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey} from "@solana/web3.js";
import { useRef } from "react";

export function Airdrop() {

    const wallet = useWallet();
    const inputRef = useRef<HTMLInputElement>(0 as any);
    const {connection}= useConnection();

    async function sendAirdropToUser() {
        alert("Airdrop button clicked");

        

        await connection.requestAirdrop(
            new PublicKey(wallet.publicKey?.toBase58() || ""),
            inputRef.current.value as any * LAMPORTS_PER_SOL
        )
        alert(`Airdrop of ${inputRef.current?.value} SOL sent to ${wallet.publicKey?.toBase58()}`);
    }

  return (
    <div>
        <input ref={inputRef} type="number" placeholder='Enter Amount'/>
        <button onClick={sendAirdropToUser} className="w-2/12 border-2">Airdrop</button>
    </div>
  )
}