/**
 * Testing the NotFoundPage
 */

import * as expect from 'expect';
import { shallow, mount } from 'enzyme';
import * as React from 'react';

import { FormattedMessage, IntlProvider, defineMessages } from 'react-intl';
import { NotFound } from '../index';

import { Card, CardTitle, CardActions } from 'react-md';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />,
    );
    expect(renderedComponent.contains(
      <CardTitle title={(
        <FormattedMessage
          id="boilerplate.containers.NotFoundPage.header"
          defaultMessage={'Page not found.'}
        />
      )}
    />)).toEqual(true);
  });

  it('should render a card', () => {
    const renderedComponent = shallow(
      <NotFound />,
    );
    const renderedButton = renderedComponent.find(Card);
    expect(renderedButton.length).toEqual(1);
  });

  it('should render a button', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NotFound />
      </IntlProvider>,
    );
    const renderedButton = renderedComponent.find(CardActions).find('button');
    expect(renderedButton.length).toEqual(1);
  });

  it('should link to "/"', (done) => {
    const dispatch = (action) => {
      expect(action.payload.args).toEqual('/');
      done();
    };
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <NotFound dispatch={dispatch} />
      </IntlProvider>,
    );
    const button = renderedComponent.find(CardActions).find('button');
    button.prop<() => void>('onClick')();
  });
});
