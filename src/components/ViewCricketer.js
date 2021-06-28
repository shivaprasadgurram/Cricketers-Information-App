import React, { Component } from 'react'
import CricketerService from '../services/CricketerService'

class ViewCricketer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      cricketer: {},
    }
  }

  componentDidMount() {
    CricketerService.getCricketerById(this.state.id).then((res) => {
      this.setState({ cricketer: res.data })
    })
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="card row">
          <h3 className="text-center cricketer-name">
            {`${this.state.cricketer.firstName} ${this.state.cricketer.lastName}`}
          </h3>
          <div className="card-body">
            <table
              className="table table-responsive table-stripped table-bordered"
              style={{ textAlign: 'center' }}
            >
              <tbody
                style={{
                  display: 'inline',
                }}
              >
                <tr>
                  <td>FirstName</td>
                  <td>{this.state.cricketer.firstName}</td>
                </tr>
                <tr>
                  <td>LastName</td>
                  <td>{this.state.cricketer.lastName}</td>
                </tr>
                <tr>
                  <td>Email Id</td>
                  <td>{this.state.cricketer.emailId}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{this.state.cricketer.country}</td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>{this.state.cricketer.role}</td>
                </tr>
                <tr>
                  <td>isRetired</td>
                  <td>{this.state.cricketer.isRetired}</td>
                </tr>
                <tr>
                  <td>Profile Link</td>
                  <td>
                    <a href={this.state.cricketer.profileLink}>
                      {this.state.cricketer.profileLink}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="center-me" style={{ marginTop: '20px' }}>
          <button
            className="btn btn-primary"
            onClick={() => this.props.history.push('/cricketers')}
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }
}

export default ViewCricketer
