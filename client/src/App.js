import React, { useEffect, lazy, Suspense } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import ErrorBoundary from './components/error-boundary/error-boundary';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const CheckOutPage = lazy(() => import('./pages/checkout/checkout'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary> 
        <Suspense fallback={<div> Loading ...</div>}>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOutPage} />
          <Route exact path='/signIn' render={() =>
            currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
          } />
        </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

