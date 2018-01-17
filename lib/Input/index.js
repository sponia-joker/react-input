import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder }) => (
  <input 
    placeholder={placeholder}
    type="text" 
  />
)

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
