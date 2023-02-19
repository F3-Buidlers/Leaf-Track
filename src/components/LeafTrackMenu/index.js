import "./LeafTrackMenu.scss";
import logo from "../../asserts/images/logo.png";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function LeafTrackMenu(props) {
  const auth = useAuth();
  const privateRoutes = true;

  return (
    <header>
      <nav>
        <ul className="main-nav">
          <li className="main-nav__item">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <figure className="main-nav__logo">
                <img src={logo} alt="logo" />
                
              </figure>
            </Link>
          </li>
          <div className="main-nav-right">
            {privateRoutes &&
            auth.user.walletAddress === "CONNECT WALLET" ? null : (
              <React.Fragment>
                <li className="main-nav-right__item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "main-nav-right__item--active" : "";
                    }}
                    to={"/monitoreo"}
                  >
                    {"Protected Natural Areas"}
                  </NavLink>
                </li>
                <li className="main-nav-right__item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "main-nav-right__item--active" : "";
                    }}
                    to={"/subscribe"}
                  >
                    {"Subscribe"}
                  </NavLink>
                </li>
              </React.Fragment>
            )}
          </div>
          <li className="main-nav-right__button">{props.children}</li>
        </ul>
      </nav>
    </header>
  );
}
