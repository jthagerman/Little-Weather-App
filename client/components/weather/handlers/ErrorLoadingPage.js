import React from 'react'
import { Tornado } from 'react-bootstrap-icons'

const ErrorLoadingPage = (props) => {
  return  <section className="weather-error">
    <Tornado size={200}/>
    <p>Error Loading Page</p>
    <button onClick={() => {window.location.reload()}}>Reload Page</button>
    </section>
}

export default ErrorLoadingPage
