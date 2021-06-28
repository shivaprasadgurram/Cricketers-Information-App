import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HeaderComp extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <Link to="/" className="navbar-brand heading">
                Cricketers Information App
              </Link>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default HeaderComp
