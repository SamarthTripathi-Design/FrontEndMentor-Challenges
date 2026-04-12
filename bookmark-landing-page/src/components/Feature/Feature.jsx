import { useState } from "react";
import "./feature.css";

const data = [
  {
    id: 1,
    title: "Bookmark in one click",
    desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    link: "More Info",
    button: "Simple Bookmarking",
    img: "../../../public/images/illustration-features-tab-1.svg",
    // img:"/images/illustration-features-tab-1.svg"
  },
  {
    id: 2,
    title: "Intelligent search",
    desc: "Our powerful search feature will help you find saved sites in no time at all No need to trawl through all of your bookmarks.",
    link: "More Info",
    button: "Speedy Searching",
    img: "../../../public/images/illustration-features-tab-2.svg",
    // img:"/images/illustration-features-tab-2.svg"
  },
  {
    id: 3,
    title: "Share your bookmarks",
    desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    link: "More Info",
    button: "Easy Sharing",
    img: "../../../public/images/illustration-features-tab-3.svg",
    // img:"/images/illustration-features-tab-3.svg"
  },
];

const Feature = () => {
  const [tabs, setTabs] = useState(0);
  const { title, desc, link, img } = data[tabs];
  return (
    <>
      <section className="feature">
        <article>
          <h2 className="feature-heading">Features</h2>
          <p className="feature-heading-info">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </article>
        <div>
          <ul className="feature-body">
            {data.map((tab, index) => (
              <li key={tab.id} className="feature-button-container">
                <button
                  onClick={() => setTabs(index)}
                  className={`${
                    index === tabs
                      ? "feature-button button-active"
                      : "feature-button "
                  }`}
                >
                  {tab.button}
                </button>
              </li>
            ))}
          </ul>
          <div className="feature-body-grid">
            <article className="feature-img-container">
              <img src={img} alt="" />
              <div className="feature-bg"></div>
            </article>
            <article className="feature-body-info">
              <h2 className="feature-body-heading">{title}</h2>
              <p className="feature-desc">{desc}</p>
              <button className="feature-body-button">{link}</button>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
