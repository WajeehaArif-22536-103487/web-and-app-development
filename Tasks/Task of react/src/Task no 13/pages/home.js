import { Link } from 'react-router-dom';
import myPhoto from '../myphoto(1).png'; 
function Home() {
  return (
    <>
      <section className="hero">
        <div className="left-hero">
          <h3>UX Designer</h3>
          <h1>Hi There, I,m</h1>
          <h1 className="name">Tom Jones</h1>
          <p>Welcome to my portfolio of captivating digital <br />experiences. Explore my work and let's create
            something<br />extraordinary together.</p>
          <div className="left-hero-buttons">
            <button className="hireme"> Hire Me </button>
            <button className="port">Portfolio</button>
          </div>
        </div>
        <div className="right-hero">
          <img src={myPhoto} alt="Portrait of Sarah Jones" width="90%" />
        </div>
      </section>
    </>
  )
}
export default Home;
