import '../CSS/Token.css';
import Spline from '@splinetool/react-spline';

const Token = () => {

    return (
        <>
            <div className='TokendivMain'>
                <h3>Mint Your Avalon</h3>
                <Spline className='SplineClass' scene="https://prod.spline.design/v9U0rYfiV2uSyetr/scene.splinecode" />

                <div className='TokenSubDiv'>
                    <p>Avalon is ERC20 Token which is Created on Polygon-Mumbai Testnet.Check out Contract of Avalon here . Check Faucet Contract here . Lets have Some Avalon in your Wallet
                    </p>
                    <button>
                        Mint 😍
                    </button>
                </div>
            </div>
        </>
    )
}

export default Token