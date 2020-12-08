import React from "react";

class NavMenus extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="nav__menu-container">
        <p className="nav__main-menu nav__main-menu--inactive">Human profile</p>
        <p className="nav__main-menu nav__main-menu--active">Pet basics</p>
        <p className="nav__main-menu nav__main-menu--inactive">Pet details</p>
        <p className="nav__main-menu nav__main-menu--inactive">Confirm</p>
      </div>
    );
  }
}
// 🔘

class NavGlobalSaveExit extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="global-menu__save-exit">
        <p>Save and exit</p>
      </div>
    );
  }
}

export default NavMenus;
export { NavGlobalSaveExit };
