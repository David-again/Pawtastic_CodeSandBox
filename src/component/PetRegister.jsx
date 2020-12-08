import React from "react";
import NavLogo, { NavBgndDog } from "./_NavImages";
import NavMenus, { NavGlobalSaveExit } from "./_NavMenus";
import PetBasics from "./PetBasics";

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
          <NavGlobalSaveExit />
        </div>
        <div className="pet-form">
          <p> Yay, we love dogs! Give us the basics about your pup. </p>
          <PetBasics />
        </div>
      </div>
    );
  }
  //9;
}

export default PetRegister;
