import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";

import "./person-details.css";

export default class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    data: {},
    loading: false,
    errors: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.setState({ loading: true });
      this.swapiService.getPerson(this.props.selectedItem).then((data) =>
        this.setState({
          data,
          loading: false,
        })
      );
    }
  }

  componentDidCatch() {
    this.setState({
      errors: true,
    });
  }

  render() {
    const { id, name, gender, eyeColor, birthYear } = this.state.data;
    if (this.state.loading) {
      return <Spinner />;
    }
    if (this.state.errors) {
      return <ErrorIndicator />;
    }
    return (
      <div className="person-details card">
        <img
          className="person-image"
          //alt="person image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
        <ErrorButton />
      </div>
    );
    return null;
  }
}
