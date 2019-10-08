import React from 'react'
import Helmet from 'react-helmet'
import config from '../config'

import Header from "../components/Header/Header"
import Footer from '../components/Footer/Footer'

import appleTouchIcon from '../../static/assets/favicon/apple-touch-icon.png'
import favicon32 from '../../static/assets/favicon/favicon-32x32.png'
import favicon16 from '../../static/assets/favicon/favicon-16x16.png'

//import '../assets/css/bootstrap-grid.min.css'

const BaseLayout = ({ children }) => (
  <div>
    <Helmet>
      <title>{ config.title }</title>
      <meta name="description" content={ config.description } />
      <meta name="keywords" content={ config.keywords } />
      <link rel="apple-touch-icon" sizes="180x180" href={ appleTouchIcon } />
      <link rel="icon" type="image/png" sizes="32x32" href={ favicon32 } />
      <link rel="icon" type="image/png" sizes="16x16" href={ favicon16 } />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Header />

    <section className="App">
      {children}
    </section>

    <Footer />
  </div>
)

export default BaseLayout