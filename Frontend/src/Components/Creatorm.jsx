import '../CSS/Creatorm.css';
import Adi from '../Images/Adi.png';
import Github from '../Images/Git.gif';
import Linkedin from '../Images/Linkedin.gif';

const Creatorm = () => {
    return (
        <>

            <div className="CenterDivision" >
                <p>Created By</p>
            </div>

            <div className="CreatorDiv">

                <div className="FirstDiv">
                    <img src={Adi} alt="No Image" />
                    <a href={""}><p>Adidem</p></a>
                </div>

                <div className="SecondDiv">
                    <img src={Github} alt="No Image" />
                    <a href={"https://github.com/Adidem23"}><p>Github</p></a>
                </div>

                <div className="ThirdDiv">
                    <img src={Linkedin} alt="No Image" />
                    <a href={"https://www.linkedin.com/in/aditya-suryawanshi-945145235/"}><p>Linkedin</p></a>
                </div>

            </div>

        </>
    )
}

export default Creatorm