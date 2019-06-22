import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main"></main>
        <Footer />
      </>
    )
  }
}

export default Layout
