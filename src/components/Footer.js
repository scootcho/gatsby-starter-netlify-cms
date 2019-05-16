import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-4">
                <div className="logo">
                    <img
                      src={logo}
                      alt="Kaldi"
                    />
                </div>
                <p>
                  <br />
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.
                </p>
              </div>
              <div className="column is-4 is-offset-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Why we build
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Our works
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        What we offer
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
