/**
 * Testing the NotFoundPage
 */

import * as expect from 'expect';
import { shallow } from 'enzyme';
import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import { NotFound } from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />,
    );
    expect(renderedComponent.contains(
      <h1>
        <FormattedMessage
          id="boilerplate.containers.NotFoundPage.header"
          defaultMessage={'Page not found.'}
        />
      </h1>)).toEqual(true);
  });

  it('should render a button', () => {
    const renderedComponent = shallow(
      <NotFound />,
    );
    const renderedButton = renderedComponent.find('button');
    expect(renderedButton.length).toEqual(1);
  });

  it('should link to "/"', (done) => {
    const dispatch = (action) => {
      expect(action.payload.args).toEqual('/');
      done();
    };

    const renderedComponent = shallow(
      <NotFound dispatch={dispatch} />,
    );
    const button = renderedComponent.find('button');
    button.prop<() => void>('onClick')();
  });
});
