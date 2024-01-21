import '../CSS/Token.css';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';

const Token = () => {

    return (
        <>
            <div className='TokendivMain'>
                <h3>Mint Your Avalon</h3>
                <Spline className='SplineClass' scene="https://prod.spline.design/v9U0rYfiV2uSyetr/scene.splinecode" />

                <div className='TokenSubDiv'>
                    <p>Avalon is ERC20 Token which is Created on Polygon-Mumbai Testnet.Check out Contract of Avalon here . Check Faucet Contract here . Lets have Some Avalon in your Wallet
                    </p>
                    <Link style={{listStyle:'none',textDecoration:'none'}} to={"/faucet"}>
                        <button>
                            Mint 😍
                        </button></Link>

                </div>
            </div>
        </>
    )
}

export default Token