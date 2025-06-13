import '../LastSection.css';
import Star from '../assets/Star.png';
import arrow from '../assets/arrow.png';

function LastSection() {
    return (
        <div className='container'>
            <div className="headings">
                <div className="heading2">WEBFLOW</div>
                <div className="heading2">
                    <img src={Star} style={{ height: '40px' }} alt="Star" /> FIGMA
                </div>
                <div className="heading2">
                    <img src={Star} style={{ height: '40px' }} alt="Star" /> DESIGNER
                </div>
                <div className="heading2">
                    <img src={Star} style={{ height: '40px' }} alt="Star" /> DEVELOPER
                </div>
            </div>
            <div className="highlight">
                <h1 className='talk'>LET’S TALK!</h1>
            </div>
            <div className="email">
                rehanurraihan@gmail.com <img src={arrow} alt="Arrow" />
            </div>
            <div className="last">
                <p>© Rehan Raihan - 2023</p>
                <div className='icons'>
                    <p>Dribbble</p>
                    <p>Behance</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
}

export default LastSection;
