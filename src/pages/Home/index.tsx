import * as React from 'react';
import Hello from '../../components/Hello';

export interface IHomeProps {
}

export interface IHomeState {
}

export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Hello name="ahhhhh" level={10}></Hello>
      </div>
    );
  }
}
