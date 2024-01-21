import '../CSS/Loader.css';
import GoToTop from './GoToTop';

const Loader = () => {
    return (
        <>
            <div className='LoaderDiv'>

                <div className="loader">
                    <div className="head"></div>

                    <div className="flames">
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                        <div className="particle"></div>
                    </div>

                    <div className="eye"></div>
                </div>


            </div>

            <p id='MonsterText'>Loading👹..</p>

            <GoToTop />
        </>
    )
}

export default Loader