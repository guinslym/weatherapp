import React, { PropTypes } from 'react';

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-primary'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      onChange={props.onUpdateCity}
      placeholder='New York, New York'
      type='text'
      value={props.city} />
  )
}

function getStyles (props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'flexEnd',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function PullCity (props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}

module.exports = PullCity;
