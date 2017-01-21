import React from 'react'
import Forecast from '../Components/Forecast'
import { pullForecast, pullWeather } from '../helpers/api'

class ForecastContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      forecastData: {}
    };

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  }
  componentWillReceiveProps () {
    this.makeRequest(nextProps.routeParams.city)
  }
  makeRequest (city) {
    pullForecast(city).then( forecastData => {
        console.log(forecastData);
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
      });
  }
  handleClick (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  }
  render() {
    return (
        <Forecast
          city={this.props.routeParams.city}
          isLoading={this.state.isLoading}
          forecastData={this.state.forecastData}
          handleClick={this.handleClick} />
    )
  }
}

ForecastContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = ForecastContainer;
