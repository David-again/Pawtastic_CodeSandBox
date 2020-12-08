import React from "react";
import { BackButton, NextButton } from "./_GlobalButtons";

class PetBasics extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.petName = React.createRef();
    this.petBreed = React.createRef();
    this.petBirthday = React.createRef();
    this.petGender = React.createRef();
    this.petSprayed = React.createRef();
    this.petWeight = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Submit was clicked!");
    console.log("Name: " + this.petName.current.value);
    console.log("Breed: " + this.petBreed.current.value);
    console.log("Gender: " + this.petGender.current.value);
  }

  render() {
    return (
      <div>
        <p> Pet Basics </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="petName">
              Name <br />
              <input
                type="text"
                ref={this.petName}
                id="petName"
                name="petName"
                placeholder="Pet's name"
              />
            </label>
          </div>
          <br />

          <div>
            <label htmlFor="petPhoto">
              Upload a photo <br />
              <input
                type="file"
                ref={this.petPhoto}
                id="petPhoto"
                name="petPhoto"
                accept="image/png, image/jpeg"
              />
            </label>
          </div>
          <br />

          <div>
            <label htmlFor="petBreed">
              Breed <br />
              <input
                type="text"
                ref={this.petBreed}
                id="petBreed"
                name="petBreed"
                placeholder="Pet's breed"
              />
            </label>
          </div>
          <br />

          <div>
            <label htmlFor="petBirthday">Birthday</label>
            <input
              type="date"
              ref={this.petBirthday}
              id="petBirthday"
              name="petBirthday"
            />
          </div>
          <br />

          <div>
            <label htmlFor="petGender">Gender </label>
            <select ref={this.petGender} id="petGender" name="petGender">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>
          <br />

          <div>
            <label htmlFor="petSprayed">Sprayed or Neutered </label>
            <select ref={this.petSprayed} id="petSprayed" name="petSprayed">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <br />

          <div>
            <label htmlFor="petWeight">Weight </label>
            <select ref={this.petWeight} id="petWeight" name="petWeight">
              <option value="under25">0-25lbs</option>
              <option value="under50">25-50lbs</option>
              <option value="under50">50-100lbs</option>
              <option value="under50">100+lbs</option>
            </select>
          </div>
          <br />

          <input type="submit" value="Submit" />
        </form>
        <br />
        <div className="pet-form__nav-strip--bottom">
          <BackButton />
          <NextButton />
        </div>
      </div>
    );
  }
}

export default PetBasics;
