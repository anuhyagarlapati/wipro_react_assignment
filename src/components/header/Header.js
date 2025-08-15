import React from "react";
import logo from '../../Images/logo.png'
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        
        <a className="navbar-brand" href="/"><img src={logo} height={50} width={80}/></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex align-items-center gap-3 w-100">
            <div className="dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Explore
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="/action">Learn AI</a></li>
                <li><a className="dropdown-item" href="/another">Launch new career</a></li>
                <li><a className="dropdown-item" href="/something">Preparation for certification</a></li>
              </ul>
            </div>

            <form className="flex-grow-1">
              <div className="input-group">
                <span
                  className="input-group-text bg-white border-end-0"
                  style={{ borderRadius: "50px 0 0 50px" }}
                >
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="search"
                  className="form-control border-start-0"
                  placeholder="Search"
                  style={{ borderRadius: "0 50px 50px 0", height: "48px" }}
                />
              </div>
            </form>
            <a className="nav-link" href="/">Plans & Pricing</a>
            <a className="nav-link" href="/link">Udemy Business</a>
            <a className="nav-link" href="/link">Tech on Udemy</a>
            <button className="btn p-0 border-0 bg-transparent">
              <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
            </button>
            <a href="#" className="btn btn-outline-primary">Log in</a>
            <a href="#" className="btn btn-primary">Sign up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
