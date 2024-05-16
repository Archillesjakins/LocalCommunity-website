import "./Header.css";

const Header = ({
  notifications,
  avatar,
  showLoginSection,
  showHome = false,
}) => {
  return (
    <header className="header">
      <div className="header-content">
        <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
        <div className="nav-links">
          {showHome && <div className="home">Home</div>}
          <div className="stays">Stays</div>
          <div className="become-a-host">Become a host</div>
        </div>
        {showLoginSection && (
          <div className="login-section">
            <img
              className="notifications-icon"
              loading="lazy"
              alt=""
              src={notifications}
            />
            {showLoginSection && (
              <img className="avatar-icon" loading="lazy" alt="" src={avatar} />
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
