import React, { Component } from "react";
import Spinner from "../spinner";
import SwapiService from "../../services/swapi-service";
import ErrorComponent from "../error-component";

import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    items: [],
    //people: {},
    loading: false,
    error: false,
  };

  /*constructor() {
    super();
    this.updatePeople();
  }

  onPeopleLoaded = (people) => {
    this.setState({
      people,
      loading: false,
    });
  };*/

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  /* updatePeople() {
    this.swapiService
      .getAllPeople()
      .then(this.onPeopleLoaded)
      .catch(this.onError);
  }*/

  render() {
    const { /*people, loading, error,*/ items } = this.state;
    const { onSelectedItem } = this.props;
    //const errorMessage = error ? <ErrorComponent /> : null;
    //const spinner = loading ? <Spinner /> : null;
    //const content = !(loading || error) ? <PeopleView people={people} /> : null;

    if (this.state.loading) {
      return <Spinner />;
    }
    if (this.state.error) {
      return <ErrorComponent />;
    }
    return (
      <ul className="item-list list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item.id}
            onClick={() => onSelectedItem(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    );
  }
}
