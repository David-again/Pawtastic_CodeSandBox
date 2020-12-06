import React from "react";

class NavLogo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="common-items__logo">
        <img
          src={require("../images/logo-pawtastic.jpg")}
          alt="Pawtastic Logo"
        />
      </div>
    );
  }
}

class NavBgndDog extends React.Component {
  render() {
    return (
      <div className="nav__bgnd-img--bottom">
        <img
          className="nav__bgnd-img--right"
          src={require("../images/dog_nav_grey_bk.jpg")}
          alt="Dog Looking Up"
        />
      </div>
    );
  }
}

export default NavLogo;
export { NavBgndDog };
