import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
<h2>Error 404</h2>
<p>Please go to <Link to="/">main page</Link></p>
    </div>
    
  )
}

export default NotFound