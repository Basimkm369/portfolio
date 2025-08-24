
const Header = ({active, setActive,menuOpen, setMenuOpen}) => {


  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a
            href="#home"
            className="nav__logo"
            onClick={() => {
              setActive('#home');
              setMenuOpen(false);
            }}
          >
            Basim K M
          </a>
        </div>

        {/* menu container with dynamic "show" class */}
        <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${
                  active === '#home' ? 'active-link' : ''
                }`}
                onClick={() => {
                  setActive('#home');
                  setMenuOpen(false);
                }}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  active === '#about' ? 'active-link' : ''
                }`}
                onClick={() => {
                  setActive('#about');
                  setMenuOpen(false);
                }}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  active === '#skills' ? 'active-link' : ''
                }`}
                onClick={() => {
                  setActive('#skills');
                  setMenuOpen(false);
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#work"
                className={`nav__link ${
                  active === '#work' ? 'active-link' : ''
                }`}
                onClick={() => {
                  setActive('#work');
                  setMenuOpen(false);
                }}
              >
                Work
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  active === '#contact' ? 'active-link' : ''
                }`}
                onClick={() => {
                  setActive('#contact');
                  setMenuOpen(false);
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* toggle button */}
        <div
          className="nav__toggle"
          id="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className="bx bx-menu"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
