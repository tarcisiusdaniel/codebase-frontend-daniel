import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import pages from './pages';
import { ROUTES } from './configs';
import 'whatwg-fetch';
import ShowTable from './ShowTable';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    //const counter = useSelector(state => state.counter)
    //const isLogged = useSelector(state => state.isLogged);
    //const dispatch = useDispatch();
    return (
      <main>
        <CssBaseline />
        <Switch>
          <Route exact path={ROUTES.HOME()} component={pages.Home} />
          <Route exact path={ROUTES.DEVELOPER(':name')} component={pages.Developer} />
          <Route component={pages.Error404} />
        </Switch>
        <ShowTable />
        {/* <h1>Counter : {counter}</h1> */}
        {/* {!isLogged ? <p>Not logged in yet...</p> : <p>Logged in successfully!</p>} */}
        {/* <button onClick={() => dispatch(increment(3))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button> */}
        <br/><br/><br/><br/><br/><br/><br/><br/>
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};