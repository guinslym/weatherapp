import React, { PropTypes } from 'react'
import { convertTemp, getDate } from '../helpers/utils'
import DayItem from './DayItem'

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  }
}

function ForecastUI (props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  console.log(props)
  return props.isLoading === true
    ? <div style={styles.header}> Loading </div>
    : <ForecastUI
        city={props.city}
        forecast={props.forecastData}
        handleClick={props.handleClick} />
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast;
