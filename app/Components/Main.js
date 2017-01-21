import React from 'react'
import PullCityContainer from '../Containers/PullCityContainer'

var styles = {
  container: {
    width: '100%',
    height: '92%'
  },
  header : {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#99B2B7',
  color: '#fff',
  padding: 5,
  }
}

class Main extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={{margin:'0'}}>React Weather App</h1>
          <PullCityContainer direction="rtl"/>
        </div>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
