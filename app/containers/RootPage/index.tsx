/**
 * RootPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction} from 'react-router-redux';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

interface IProps {
  dispatch?: (action: RouterAction) => void;
}

export class RootPage extends React.Component<IProps, {}> {

  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  private redirect() {
    this.props.dispatch(push('/'));
  }

  public render() {
    return (
      <article>
        <Helmet>
          <title>Root</title>
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(RootPage);
