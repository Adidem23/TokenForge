import '../CSS/Herosection.css';
import Avalon from '../Images/AvalonR.png';

const Herosection = () => {

  return (
    <section className='MainRender'>

      <div className='TokenForge'>
        <p>TokenForge</p>
      </div>

      <div className='LogoDiv'>
        <img src={Avalon} className='LogoDivimg' width={"300px"} height={"300px"} alt='Logo Not Loaded..' />
        <h2>Avalon</h2>
      </div>

    </section>
  )
}

export default Herosection