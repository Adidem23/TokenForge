import '../CSS/Faucet.css';
import GoToTop from './GoToTop';
import { connectAccount } from 'enchantmask';
import panda from '../Images/panda.png';
import { useState } from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { ethers } from 'ethers';
import FaucetAbi from '../ABI/Faucet.json';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Faucet = () => {

  const [Connected, setConnected] = useState(false);
  const [Address, setAddress] = useState("");
  const [RefreshedAddress, setRefreshedAddress] = useState("");
  const [RequestedAddress, setRequestedAddress] = useState("");
  const [Contractbal, setContractbal] = useState(0);
  const Transactions = [];
  const FaucetContractAddress = "0x7581A37c5Fa089c369d4D89ca0c4a56e09792782";

  const ConnectMetamask = async () => {
    const Account = await connectAccount();
    setAddress(Account);
    ReduceAdderess(Account);
    setConnected(true);
  }

  const ReduceAdderess = (Address) => {
    const firstFour = Address.slice(0, 4);

    const lastFour = Address.slice(-4);

    const result = `${firstFour}..${lastFour}`;

    setRefreshedAddress(result);
  }

  const getContractBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signers = provider.getSigner();
    const FaucetContractInstance = new ethers.Contract(FaucetContractAddress, FaucetAbi.abi, signers);

    const Contractb = await FaucetContractInstance.getBalance();
    const etherRealValue = ethers.utils.formatUnits(Contractb, 18);
    setContractbal(etherRealValue);
  }

  getContractBalance();

  const SendUserADI = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signers = provider.getSigner();
    const FaucetContractInstance = new ethers.Contract(FaucetContractAddress, FaucetAbi.abi, signers);

    try {
      const moneytransfer = await FaucetContractInstance.requestTokens();
      if (moneytransfer) {

        const RecentlyMintedTx = { Hash: `${moneytransfer.hash}`, address:`${RequestedAddress}`,TimeMinted:`${new Date().getTime()}`};

        Transactions.push(RecentlyMintedTx);

        console.log("Transactions are : ");
        for (let i = 0; i < Transactions.length; i++) {
          console.log(Transactions[i]);
       }

        toast.success(' Mint Successful 🟢', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }

    } catch (err) {
      toast.error(`UnExpected Error: ${err.data.message}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

  }

  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={panda} alt="Logo" />
        </div>

        <ul className="nav-links">
          <li><a>Avalon Faucet</a></li>
          <li><a>{Connected ? "Connected 🟢" : " Not Connected 🔴"}</a></li>
          {Connected && <li><a></a><Jazzicon diameter={30} seed={jsNumberForAddress(`${Address}`)} /></li>}
          {Connected && <li><a>{RefreshedAddress}</a></li>}

        </ul>

        <button onClick={ConnectMetamask}>{Connected ? "Connected" : "Connect 🦊"}</button>

      </nav>

      <div className='AvalonDiv'>

        <h2>Avalon Faucet</h2>
        <p>Fast and Reliable 5 ADI / Day</p>

      </div>

      <div className='MinterDiv'>

        <h3>Contract Balance: {Contractbal} Adi</h3>

        <div className="input-container">
          <input type="text" name="text" className="input" placeholder="Enter Wallet Address" onChange={(e) => { e.preventDefault; setRequestedAddress(e.target.value) }} />
          <div className="highlight"></div>

          <button className="btn">
            <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
              <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
            </svg>

            <span className="text" onClick={SendUserADI} >Send Me ADI</span>
          </button>

        </div>

        <div className='TransDiv'>

          <h4>Transactions 😵‍💫</h4>
        

        </div>



      </div>
      <GoToTop />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Faucet