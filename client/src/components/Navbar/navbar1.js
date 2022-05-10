const Navbar1 = () => {
  return (
    <div className="contain">
      <nav className="navbar navbar-1 navbar-expand-md" id="header-topbar">
        <a className="navbar-brand ml-5" href="/">
          <img
            src="assets/images/logo.png"
            className="white-logo"
            width="90px"
            alt="logo"
          />
        </a>
        <ul name="navbar-nav ml-auto align-items-center">
          <a className="btn main-btn" href="tel:00249183463543">
            <i className="fas fa-phone mr-1"></i>الإتصال السريع
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar1;
