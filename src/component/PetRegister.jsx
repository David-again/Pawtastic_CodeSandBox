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
          <div className="nav__menu-container">
            <div>
              <img src="../images/logo-pawtastic.jpg" alt="Pawtastic Logo" />
            </div>
            <NavMenus />
            <div>
              <p>
                <a href=""> Save and exit </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pet-form"> Something wonderful! </div>
        {/* <div className="pet-form">Finally </div>
        <div className="nav">What is this?</div> */}
      </div>
    );
  }
  //9;
}

export default PetRegister;
