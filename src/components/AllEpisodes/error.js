import React from 'react'

const Error = ({message}) => (
  <div className="error">
    <div className="error__title">Error!</div>
    <div className="error__message">{message}</div>
  </div>
)

export default Error