/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import Helmet from 'react-helmet';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

const styles = require('./styles.module.scss');

interface IAppProps {
  children?: React.ReactNode;
}

class App extends React.Component<IAppProps, {}> {
  public render() {
    return (
      <div>
        <Helmet
          titleTemplate="%s - App"
        >
          {/*<meta name="description" content="app description" />*/}
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default App;
