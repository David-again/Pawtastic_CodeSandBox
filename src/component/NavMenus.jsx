import React from "react";

class NavMenus extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <p className="nav__main-menu nav__main-menu--inactive">Human profile</p>
        <p className="nav__main-menu nav__main-menu--active">Pet basics</p>
        <p className="nav__main-menu nav__main-menu--inactive">Pet details</p>
        <p className="nav__main-menu nav__main-menu--inactive">Confirm</p>
      </div>
    );
  }
}
// 🔘

export default NavMenus;
