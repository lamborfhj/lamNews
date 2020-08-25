import * as React from 'react';
import { ContentMain } from '../components';

export interface IBasicLayoutProps {
}

export interface IBasicLayoutState {
}

export default class BasicLayout extends React.Component<IBasicLayoutProps, IBasicLayoutState> {
  constructor(props: IBasicLayoutProps) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <header>1111</header>
        <ContentMain/>
        <footer>2222</footer>
        
      </div>
    );
  }
}

