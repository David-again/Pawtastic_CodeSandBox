import React from "react";

class BackButton extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <button> Back </button>
      </div>
    );
  }
}

class NextButton extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <button> Next </button>
      </div>
    );
  }
}

// class NavNextButton extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }
//   render() {
//     return <div>The Next button</div>;
//   }
// }

export { BackButton, NextButton };
