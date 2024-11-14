import "./hero.css";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <article className="hero-section-body">
          <h1 className="hero-section-heading"> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <ul className="hero-section-button-container">
            <li>
              <button className="chrome-btn">Get it on Chrome</button>
            </li>
            <li>
              <button className="firefox-btn">Get it on Firefox</button>
            </li>
          </ul>
        </article>
        <article className="hero-section-img-container">
          <img
            src="../../public/images/illustration-hero.svg"
            alt="illustration-hero"
          />
          {/* <img src="/images/illustration-hero.svg" alt="illustration-hero" /> */}
          <div className="hero-bg"></div>
        </article>
      </section>
    </>
  );
}

export default Hero;
