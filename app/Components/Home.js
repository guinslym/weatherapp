import React, { PropTypes } from 'react'
import PullCityContainer from '../Containers/PullCityContainer'

var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/bg.jpg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  header: {
    fontSize: 45,
    color: '#fff',
    fontWeight: 100,
  },
}

function Home (props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Enter a City and State</h1>
      <PullCityContainer />
    </div>
  )
}

module.exports = Home;
