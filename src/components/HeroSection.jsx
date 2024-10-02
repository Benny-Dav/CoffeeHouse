const HeroSection= () =>{
    return(
        <section class="hero-section">
        <nav className="nav-bar">
          <ul className="nav-ul">

            <li className="nav-link"><a href="">Home</a></li>
            <li className="nav-link"><a href="">About</a></li>
            <li className="nav-link"><a href="">Contact</a></li>
          </ul>
        </nav>
        <div className="welcome-div">
          <h1 className="welcome-div-h1">A SPECIAL MORNING MOMENT!</h1>
          <p className="welcome-div-p">This coffee is brewed by first roasting the green coffe beans over hot coals in a brazier.</p>
          <button className="shopNow">SHOP NOW</button>
        </div>
      </section>
    )
}
export default HeroSection;