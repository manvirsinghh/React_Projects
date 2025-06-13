import '../Hero.css';

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

import doradesign from '../assets/doradesign.png';
import Group from '../assets/Group.png';
import Frame from '../assets/Frame.png';

 function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          I AM A <span className="img-text" style={{ backgroundImage: `url(${img1})` }}></span>
          FREELANCE
          <br />
          DESIGNER <span className="img-text" style={{ backgroundImage: `url(${img2})` }}></span>
          FROM
          <br />
          SAN FRANCISCO
        </h1>
      </div>
      <div className="hero-bottom">
        <div className="brands">
          <img src={doradesign} />
          <img src={Group} />
          <img src={Frame} />
        </div>
        <p className="description">
          Welcome to my portfolio. Here, artistry meets functionality.
          Dive into a curated showcase of distinctive branding and
          web designs, each crafted to captivate and inspire.
        </p>
      </div>
    </section>
  );
}
export default Hero;