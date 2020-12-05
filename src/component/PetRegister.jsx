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
          {/* <p className="common-items__logo"> Na wah oh!</p> */}
          <div className="nav__menu-container">
            <NavMenus />
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
