import * as React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Home from '../../pages/Home';

export interface IContentMainProps {
}

export interface IContentMainState {
}

export default class ContentMain extends React.Component<IContentMainProps, IContentMainState> {
  constructor(props: IContentMainProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        {/* <PrivateRoute path='/stream' component={BasicLayout} /> */}
        <Redirect exact from="/" to="/home" />
      </Switch>
    );
  }
}
