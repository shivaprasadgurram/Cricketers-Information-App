import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComp from './components/FooterComp'
import HeaderComp from './components/HeaderComp'
import ListCricketers from './components/ListCricketers'
import CreateCricketer from './components/CreateCricketer'
import ViewCricketer from './components/ViewCricketer'
import VerifyAuthorization from './components/VerifyAuthorization'

function App() {
  return (
    <div>
      <Router>
        <HeaderComp />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListCricketers}></Route>
            <Route path="/cricketers" component={ListCricketers}></Route>
            <Route
              path="/add-cricketer/:id"
              component={CreateCricketer}
            ></Route>
            <Route path="/view-cricketer/:id" component={ViewCricketer}></Route>
            <Route path="/verify-me" component={VerifyAuthorization}></Route>
          </Switch>
        </div>
        <FooterComp />
      </Router>
    </div>
  )
}

export default App
