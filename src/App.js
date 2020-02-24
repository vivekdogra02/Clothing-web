import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout';
import { checkUserSession } from './redux/user/user.actions';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signIn' render={() => 
            this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
          } />
        </Switch>
      </div>
    );
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

