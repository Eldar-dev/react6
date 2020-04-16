import React, { Component } from "react";

import Header from "./components/header";
import RandomPlanet from "./components/random-planet";
import ItemList from "./components/item-list";
import PersonDetails from "./components/person-details";
import PlanetDetails from "./components/planet-details";
import StarshipDetails from "./components/starship-details";
import ErrorIndicator from "./components/error-indicator";
import ErrorButton from "./components/error-button";

import "./App.css";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedItem: null,
    errors: false,
  };

  onSelectedItem = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({
      errors: true,
    });
  }

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    if (this.state.errors) {
      return <ErrorIndicator />;
    }
    return (
      <div>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onSelectedItem={this.onSelectedItem} />
          </div>
          <div className="col-md-6">
            <PersonDetails selectedItem={this.state.selectedItem} />
            <PlanetDetails selectedItem={this.state.selectedItem} />
            <StarshipDetails selectedItem={this.state.selectedItem} />
          </div>
        </div>
      </div>
    );
  }
}
