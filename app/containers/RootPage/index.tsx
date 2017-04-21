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

import * as Moment from 'moment';
import 'moment-timezone'; // inject timezone functions into moment

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

    const targetTimezones = [
      [`Local (${Moment.tz.guess()})`, Moment.tz.guess()],
      ['Eastern', 'Eastern'],
      ['London', 'Europe/London'],
      ['Pacific', 'Pacific'],
    ].map(([label, timezone]) => {
      console.log(label, timezone, Moment().tz(timezone));
      return (<div key={timezone}>{label}: {Moment().tz(timezone).format('YYYY-MM-DD hh:mm:ss A')}</div>);
    });

    return (
      <article>
        <Helmet>
          <title>Root</title>
        </Helmet>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <div>
          {targetTimezones}
        </div>
      </article>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default connect()(RootPage);
