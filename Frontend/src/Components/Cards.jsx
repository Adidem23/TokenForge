import '../CSS/Cards.css';
import Avalogo from '../Images/ERC20.png';
import QuestionCoin from '../Images/Hecker.png';
import Contribute from '../Images/Contribute.png';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';

const Cards = () => {

    const [Hovered, setHovered] = useState(false);

    return (
        <>
            <div className="FlexClass" onMouseEnter={() => { setHovered(true); }}>

                <Fade left when={Hovered}>
                    <div id="two" className="card"  >
                        <div className="card-content">
                            <img height={"200px"} width={"200px"} src={Contribute} alt='NotLoaded..' />
                            <p className="card-title">Contribute to Avalon</p>
                        </div>
                    </div>
                </Fade>


                <Fade up when={Hovered} >
                    <div id="three" className="card">
                        <div className="card-content">
                            <img height={"120px"} width={"150px"} src={QuestionCoin} alt='NotLoaded..' />
                            <p className="card-title">Create Your Own ERC20</p>
                        </div>
                    </div>
                </Fade>

                <Fade right when={Hovered}>
                    <div id="four" className="card">
                        <div className="card-content">
                            <img height={"250px"} width={"250px"} src={Avalogo} alt='NotLoaded..' />
                            <p className="card-title">Mint Avalon Token</p>
                        </div>
                    </div>
                </Fade>

            </div>
        </>
    )
}

export default Cards