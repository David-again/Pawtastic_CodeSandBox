import React from "react";
import NavMenus from "./NavMenus";

class PetRegister extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="page-container">
        <div className="nav">
          <div className="common-items__logo">
            <img
              src={require("../images/logo-pawtastic.jpg")}
              alt="Pawtastic Logo"
            />
          </div>
          <div className="nav__menu-container">
            <NavMenus />
          </div>
          <div className="nav__bgnd-img--bottom">
            <img
              className="nav__bgnd-img--right"
              src={require("../images/dog_nav_grey_bk.jpg")}
              alt="Dog Looking Up"
            />
          </div>
          <div className="global-menu">
            <p>Save and exit</p>
          </div>
        </div>
        <div className="pet-form">
          Something wonderful! <br />
        </div>
      </div>
    );
  }
  //9;
}

export default PetRegister;
