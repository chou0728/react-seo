import React from 'react'
import {Helmet} from 'react-helmet'
import './About.css'

function About() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="This is About page"/>
        <title>About Page</title>
      </Helmet>
      <h1 className="about-title">
        This is About page
      </h1>
    </div>
  )
}

export default About