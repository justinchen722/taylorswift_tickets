import "./navbar.css";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const sparklestyle = {
  display: "absolute",
  color: "#D99BFF",
  fontSize: "2em",
};

const NavBar = () => {

  return (
    <nav>
      <ul>
        <li>
          <a href="/home">
            <div className="iconwrapper">
              <PiSparkleFill style={sparklestyle} />
              <p className="taylor">Taylor Swift</p>
            </div>
          </a>
        </li>

        <li>
          <a href="/merch">
            <button className="merchButton">
              <p className="merch">Merch</p>
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
