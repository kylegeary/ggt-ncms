import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="footer__content">
            <p className="footer__content-text-two">
              Built as a 🎁for Chris &amp; Paige
            </p>
            <p className="footer__content-text-two">
              &copy; 2019{" "}
              <Link className="footer__content-text-link" to="#">
                Kyle Geary
              </Link>
            </p>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
