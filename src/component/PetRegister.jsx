import React from "react";
import NavLogo, { NavBgndDog } from "./NavImages";
import NavMenus, { NavGlobalMenu } from "./NavMenus";

class PetRegister extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="page-container">
        <div className="nav">
          <NavLogo />
          <NavMenus />
          <NavBgndDog />
          <NavGlobalMenu />
        </div>
        <div className="pet-form">
          <p> Yay, we love dogs! Give us the basics about your pup </p>
        </div>
      </div>
    );
  }
  //9;
}

export default PetRegister;
