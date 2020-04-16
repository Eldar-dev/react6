import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import "./starship-details.css";

export default class StarshipDetails extends Component {
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
    const { id, name, model, manufacturer, costInCredits } = this.state.data;
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
              <span className="term">Model</span>
              <span>{model}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Manufacturer</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">CostInCredits</span>
              <span>{costInCredits}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
