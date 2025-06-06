import './App.css';
import Profile from './components/Profile/Profile';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <div className="app-card">
      <Switch>   
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/signin" component={Login} />
                <Route path="/signup" component={Signup} />
      </Switch></div>
    </div>
  );
}

export default App;
