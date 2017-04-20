/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import Helmet from 'react-helmet';

import { Toolbar } from 'react-md';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder

const styles = require('./styles.scss');

interface IAppProps {
  children?: React.ReactNode;
}

export interface IState {
  title?: string;
}

class App extends React.Component<IAppProps, IState> {

  public state = {};

  constructor(props) {
    super(props);

    this._helmetStateChange = this._helmetStateChange.bind(this);
  }

  private _helmetStateChange(newState: Helmet['state']) {
    this.setState({
      title: newState.title,
    });
  }

  public render() {
    return (
      <div className={styles.wrapper}>
        <Helmet
          titleTemplate="%s - App"
          onChangeClientState={this._helmetStateChange}
        >
          {/*<meta name="description" content="app description" />*/}
        </Helmet>
        <Toolbar
          fixed
          colored
          title={(Helmet.peek() || {title: ''}).title.toString()}
        />
        <div className="md-toolbar-relative">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
