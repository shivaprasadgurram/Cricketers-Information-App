import React, { Component } from 'react'
import Pagination from './Pagination'
import CricketerService from '../services/CricketerService'

class ListCricketers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cricketers: [],
      currentPage: 1,
      cricketersPerPage: 5,
    }

    this.addCricketer = this.addCricketer.bind(this)
    this.editCricketer = this.editCricketer.bind(this)
    this.deleteCricketer = this.deleteCricketer.bind(this)
    this.viewCricketer = this.viewCricketer.bind(this)
  }

  componentDidMount() {
    CricketerService.getCricketers().then((res) => {
      this.setState({ cricketers: res.data })
    })
  }

  editCricketer(id) {
    this.props.history.push(`/add-cricketer/${id}`)
  }

  viewCricketer(id) {
    this.props.history.push(`/view-cricketer/${id}`)
  }

  deleteCricketer(id) {
    CricketerService.deleteCricketer(id).then((res) => {
      this.setState({
        cricketers: this.state.cricketers.filter(
          (cricketer) => cricketer.id !== id
        ),
      })
    })
  }
  addCricketer() {
    this.props.history.push('/verify-me')
  }
  render() {
    const indexOfLastemp = this.state.currentPage * this.state.cricketersPerPage
    const indexofFirstemp = indexOfLastemp - this.state.cricketersPerPage
    const currentCricketers = this.state.cricketers.slice(
      indexofFirstemp,
      indexOfLastemp
    )

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber })
    return (
      <div>
        <h2 className="text-center" style={{ marginTop: '20px' }}>
          Cricketers List
        </h2>
        <button
          className="btn btn-primary"
          onClick={this.addCricketer}
          style={{ marginBottom: '20px' }}
        >
          Add a Cricketer
        </button>

        <div className="row">
          <table className="table table-responsive table-stripped table-bordered ">
            <thead>
              <tr
                style={{
                  background: '#212121',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Country</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentCricketers.map((cricketer) => (
                <tr key={cricketer.id} className="text-align-center">
                  <td>{cricketer.firstName}</td>
                  <td>{cricketer.lastName}</td>
                  <td>{cricketer.country}</td>
                  <td>{cricketer.role}</td>
                  <td>
                    <button
                      onClick={() => this.editCricketer(cricketer.id)}
                      className="btn btn-warning mine"
                    >
                      Update
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.deleteCricketer(cricketer.id)}
                      className="btn btn-danger mine"
                    >
                      Delete
                    </button>
                    <button
                      style={{ marginLeft: '10px' }}
                      onClick={() => this.viewCricketer(cricketer.id)}
                      className="btn btn-info mine"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="center-me">
          {`${indexofFirstemp + 1} - ${
            indexOfLastemp > this.state.cricketers.length
              ? this.state.cricketers.length
              : indexOfLastemp
          } of ${this.state.cricketers.length}`}
        </div>
        <br />
        <div className="center-me" style={{ marginBottom: '50px' }}>
          <Pagination
            cricketersPerPage={this.state.cricketersPerPage}
            totalCricketers={this.state.cricketers.length}
            paginate={paginate}
          />
        </div>
      </div>
    )
  }
}

export default ListCricketers
