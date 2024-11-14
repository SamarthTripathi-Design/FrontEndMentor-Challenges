import "./header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img
            src="../../public/images/logo-bookmark.svg"
            alt="Book-mark logo"
          />
          {/* <img src="/images/logo-bookmark.svg" alt="Book-mark logo" /> */}
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <button>Features</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
          <ul>
            <li>
              <img
                src="../../public/images/icon-facebook.svg"
                alt="icon-facebook"
              />
              {/* <img src="/images/icon-facebook.svg" alt="icon-facebook" /> */}
            </li>
            <li>
              <img
                src="../../public/images/icon-twitter.svg"
                alt="icon-twitter"
              />
              {/* <img src="/images/icon-twitter.svg" alt="icon-twitter" /> */}
            </li>
          </ul>
        </nav>
        <div>
          <button>
            <img
              src="../../public/images/icon-hamburger.svg"
              alt="icon-hamburger"
            />
            {/* <img src="/images/icon-hamburger.svg" alt="icon-hamburger" /> */}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
