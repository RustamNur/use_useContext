import React ,{useContext}from "react";
import "./navbar.css";
import { MovieContext } from "../context";

const Navbar = () => {

const [data] = useContext(MovieContext)

  return (
    <div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col">
            <div className="leftHand">
              <i className="fa-solid fa-xl fa-video"></i>
              <h2>Movie Time</h2>
            </div>
          </div>
          <div className="col">
            <div className="rightHand">
              <h5>Home</h5>
              <h5>About</h5>
              <h5>Contact</h5>
              <h5 className="box">Library {data.length}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
