import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Welcome from './components/Welcome'
import AboutUs from './components/AboutUs'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
