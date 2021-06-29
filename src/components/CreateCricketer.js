import React, { Component } from 'react'
import CricketerService from '../services/CricketerService'

class CreateCricketer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      emailId: '',
      country: '',
      role: '',
      isRetired: '',
      profileLink: '',
    }
  }

  handleOnChange = (evt) => {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value })
  }

  submitMe = (e) => {
    e.preventDefault()
    let cricketer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      country: this.state.country,
      role: this.state.role,
      isRetired: this.state.isRetired,
      profileLink: this.state.profileLink,
    }
    if (this.state.id === '_add') {
      CricketerService.createCricketer(cricketer).then((res) => {
        this.props.history.push('/cricketers')
      })
    } else {
      CricketerService.updateCricketer(cricketer, this.state.id).then((res) => {
        this.props.history.push('/cricketers')
      })
    }
  }
  componentDidMount() {
    if (this.state.id === '_add') {
      return
    } else {
      CricketerService.getCricketerById(this.state.id).then((res) => {
        let cricketer = res.data
        this.setState({
          firstName: cricketer.firstName,
          lastName: cricketer.lastName,
          emailId: cricketer.emailId,
          country: cricketer.country,
          role: cricketer.role,
          isRetired: cricketer.isRetired,
          profileLink: cricketer.profileLink,
        })
      })
    }
  }
  saveOrUpdateEmployee = (e) => {}
  cancel() {
    this.props.history.push('/cricketers')
  }

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Cricketer</h3>
    } else {
      return <h3 className="text-center">Update Cricketer</h3>
    }
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container" style={{ marginBottom: '50px' }}>
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form onSubmit={this.submitMe}>
                  <div className="form-group">
                    <label> First Name: </label>
                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.handleOnChange}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Last Name: </label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.handleOnChange}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Email Id: </label>
                    <input
                      placeholder="Email Address"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.handleOnChange}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Country: </label>
                    <input
                      placeholder="Country"
                      name="country"
                      className="form-control"
                      value={this.state.country}
                      onChange={this.handleOnChange}
                      required
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <label> Role: </label>
                    <select
                      required
                      value={this.state.role}
                      onChange={this.handleOnChange}
                      className="form-control"
                      name="role"
                    >
                      <option value="select">Select</option>
                      <option value="WK-Batsman">WK-Batsman</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Batting Allrounder">
                        Batting Allrounder
                      </option>
                      <option value="Bowler">Bowler</option>
                      <option value="Bowling Allrounder">
                        Bowling Allrounder
                      </option>
                    </select>
                  </div>
                  <br />

                  <div className="form-group">
                    <label> isRetired: </label>
                    <select
                      required
                      value={this.state.isRetired}
                      onChange={this.handleOnChange}
                      className="form-control"
                      name="isRetired"
                    >
                      <option value="select">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <br />
                  <div className="form-group">
                    <label> ProfileLink: </label>
                    <input
                      placeholder="ProfileLink"
                      name="profileLink"
                      className="form-control"
                      value={this.state.profileLink}
                      onChange={this.handleOnChange}
                      required
                    />
                  </div>
                  <br />
                  <button className="btn btn-success">Save</button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateCricketer
