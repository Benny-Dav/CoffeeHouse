import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (<section className="about-section">
    <div className="about-headtext">
      <h1 className="welcome-div-h1">OUR DELICIOUS OFFERS</h1>
      <p className="welcome-div-p">We have cookies and breads to complement your coffee</p>
    </div>
    <div className="complements-div">

      <div className="complement1">
        <div className="complement1-img"></div>
        <div className="complement-txt">
          <h3>TYPES OF COFFEE</h3>
          <p>Different types of coffee different types of coffee</p>
        </div>
      </div>

      <div className="complement2">
        <div className="complement2-img"></div>
        <div className="complement-txt">
          <h3>TYPES OF BREADS</h3>
          <p>Different types of breads different types of breads</p>
        </div>
      </div>
      <div className="complement3">
        <div className="complement3-img"></div>
        <div className="complement-txt">
          <h3>TYPES OF COOKIES</h3>
          <p>Different types of cookies different types of cookies</p>
        </div>
      </div>
    </div>

    <div className="specialOffer-div">
      <div className="specialOffer-txt">
        <h2 className="text-[3em]">New Exclusive Coffee!!</h2>
        <p className="mb-[1em]">This coffee is made specially on request. Place your order now!</p>
        <p>
          <ul>
          <li><FontAwesomeIcon icon={faCheck} className="text-[white] text-[1em] "/>   Free honey, sugar and cream.</li>
          <li><FontAwesomeIcon icon={faCheck} className="text-[white] text-[1em] "/>  Groups discount</li>
          <li><FontAwesomeIcon icon={faCheck} className="text-[white] text-[1em] "/>  Express delivery</li>
          </ul>
        </p>
        <button className="orderNow">ORDER NOW</button>
      </div>
      </div >
  </section>
    
    );
}

export default AboutSection;