import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

const Layout = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      <div className="loading"></div>
    </>
  )
}

export default Layout
