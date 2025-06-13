import image9 from '../assets/image9.png';
import quote from '../assets/quote.png';
import Arrows from '../assets/Arrows.png';
import '../Testimonial.css';

function Testimonial() {
    return (
        <div className="container">
            <div className="bg-image"></div>
            <div>
                <h2 className="title">✹ What they say</h2>
            </div>
            <div className="img">
                <img src={image9} alt="Testimonial" style={{ borderRadius: '50%', height: '64px', width: '64px' }} />
                <div className="img-content">
                    <h5>Floyd Miles</h5>
                    <p>eBay</p>
                </div>
            </div>
            <div className="content">
                Synergy's resume builder is fantastic. It helped<br /> me create a professional resume that stood<br /> out to employers. Synergy's resume builder is<br /> fantastic. It helped me create a professional <br /> resume that stood out to employers.
            </div>
            <div className="arrow-container">
                <img src={Arrows} alt="Arrows" className="arrow-image" />
            </div>
        </div>
    );
}

export default Testimonial;
