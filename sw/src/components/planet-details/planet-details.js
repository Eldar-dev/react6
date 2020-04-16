import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import "./planet-details.css";

export default class PlanetDetails extends Component {
  state = {
    data: {},
  };

  swapiService = new SwapiService();

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItem !== this.props.selectedItem) {
      this.swapiService.getPlanet(this.props.selectedItem).then((data) =>
        this.setState({
          data,
        })
      );
    }
  }
  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state.data;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          //alt="person image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
