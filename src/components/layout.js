import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

class Layout extends React.Component {
  render({ children }) {
    return (
      <>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </>
    )
  }
}

export default Layout
