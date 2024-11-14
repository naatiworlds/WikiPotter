import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
    const error = useRouteError()
  return (
    <div>
      <p>{error.error.message}</p>
      <p>{error.statusText}</p>
      <p>{error.status}</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default NotFound
