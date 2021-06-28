import React, { Component } from 'react'

class FooterComp extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <p>
            Developed by{' '}
            <a
              href="https://www.linkedin.com/in/shiva-prasad-gurram-2668b3129/"
              style={{ textDecoration: 'none', color: 'orange' }}
              target="_blank"
              rel="noreferrer"
            >
              Shiva Prasad Gurram
            </a>
          </p>
        </footer>
      </div>
    )
  }
}

export default FooterComp
