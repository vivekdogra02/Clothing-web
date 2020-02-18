import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  unsubscribeFromAuth = null;
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>  {
      this.setState({currentUser: user});
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path = '/shop' component={ShopPage} />
          <Route path = '/signIn' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }

}

export default App;

