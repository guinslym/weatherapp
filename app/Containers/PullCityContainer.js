import React, { PropTypes } from 'react'
import PullCity from '../Components/PullCity'
import { pullForecast, pullWeather } from '../helpers/api'

class PullCityContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ''
    };

    this.handleUpdateCity = this.handleUpdateCity.bind(this);
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
  }
  handleSubmitCity () {
    console.log(this.state.city);
    pullForecast(this.state.city);
    pullWeather(this.state.city);
  }
  handleUpdateCity (e) {
    this.setState({
      city: e.target.value
    });
  }
  render () {
    return (
      <PullCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
}

PullCityContainer.propTypes = {
  direction: PropTypes.string
};

PullCityContainer.defaultProps = {
    direction: 'column'
};

module.exports = PullCityContainer;
