import '../CSS/MintOwn.css';
import { useState } from 'react';
import axios from 'axios';
import {ethers} from 'ethers'
import abi from '../ABI/Input.json';
import bytecode from '../ABI/Input.json';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const MintOwn = () => {

    const [TokenName, setTokenName] = useState("");
    const [TokenSymbol, setTokenSymbol] = useState(" ");
    const [Deployed, setDeployed] = useState(false);
    const [DeployedContractAddress, setDeployedContractAddress] = useState("")

    const GiveParameters = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:6789/Create", { TokenNameis: TokenName, TokenUnitis: TokenSymbol }, { withCredentials: true }).then(async (res) => {
            console.log(res.data);
            await DeployContract();
            toast.success(' Made Your Token 🪙', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }).catch((err)=>{
            toast.error('Error While Making Coin 😵', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        })

    }

    const DeployContract = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const factory = new ethers.ContractFactory(abi.abi, bytecode.bytecode, signer);
        const contract = await factory.deploy();
        console.log(contract);
        setDeployed(true);
        const ContractAddressDeployed = contract.address;
        setDeployedContractAddress(ContractAddressDeployed);
    }

    return (
        <>
            <h3>Mint Your Own Token</h3>

            <div className="MintOwnDiv">

                <input placeholder="Enter Token Name " type="text" name="text" className="input" onChange={(e) => { setTokenName(e.target.value) }} />

                <br />

                <input placeholder="Enter Token Unit " type="text" name="text" className="input" onChange={(e) => { setTokenSymbol(e.target.value) }} />

                <br />
                <br />

            
                <button className='btn' style={{ margin: 'auto' }} onClick={GiveParameters}>Create</button>

                

            </div>

            <div className='DeployedDiv'>
                    {Deployed && <a style={{listStyle:"none",textDecoration:"none"}}  href={`https://mumbai.polygonscan.com/address/${DeployedContractAddress}`}><h3>Deployed Contract Address : {DeployedContractAddress}</h3></a>}
           </div>

        </>
    )
}

export default MintOwn