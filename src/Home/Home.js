import React from 'react'
import {Helmet} from 'react-helmet'
import './Home.css'

function Home() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="This is Home page"/>
        <title>Home Page</title>
      </Helmet>
      <h1 className="home-title">
        This is Home Page
      </h1>
    </div>
  )
}

export default Home

