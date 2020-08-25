import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import BasicLayout from './layouts'
// const Home = React.lazy(() => import('./pages/Home'));
// const Home = React.lazy(() =>
//   import('./pages/Home/index')
//     .then(({ Home }) => ({ default: Home })),
// );


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/home' component={BasicLayout} />
       {/* <PrivateRoute path='/stream' component={BasicLayout} /> */}
      <Redirect exact from='/' to='/home' />
    </Switch>
  </Router>
  );
}

export default App;
