
import './App.css';
import { Route,Switch} from 'react-router-dom'

import Login from './screens/Login';
import Register from './screens/Registration'
import ForgetPassword from './components/forgetPassword'
import ActivateUser from './components/ActivateUser';
import ResetPassword from './components/ResetPassword'
import Dashboard from './screens/Dashboard'
import UrlShorten from './components/UrlShorten'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Login} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/urlshorten' component={UrlShorten} />
      <Route path='/home' component={Home} />
      <Route path="/register" exact component={Register} />
      <Route path='/authentication/activate' component={ActivateUser} />
      <Route path='/forgetpassword'   component={ForgetPassword} />
      <Route patth='/resetpassword' component={ResetPassword} />
      
      </Switch>
      
    </div>
  );
}

export default App;
