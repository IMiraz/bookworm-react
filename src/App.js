import React from 'react';
import propTypes from 'prop-types'
import {Route} from 'react-router-dom'
import Homepage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import DashboradPage from './components/pages/DashboardPage'
import SignupPage from './components/pages/signupPage'
import UserRoute from './components/Router/UserRoute'
import GuestRoute from './components/Router/GuestRoute'




const App = ({location}) => (
<div className="ui container">
<Route  location={location} path="/" exact component={Homepage} />
<GuestRoute location={location} path="/login"  exact component={LoginPage} />
<GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
<UserRoute location={location} path="/dashborad" exact  component={DashboradPage} />
</div>
);
App.propTypes={
location:propTypes.shape({

pathname:propTypes.string.isRequired

}).isRequired
}

export default App;
