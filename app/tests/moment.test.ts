/**
 * Test moment, moment-timezone
 */

import * as expect from 'expect';

import * as Moment from 'moment';
import 'moment-timezone'; // inject timezone functions into moment

describe('moment', () => {
  it('should format a predetermined datetime', () => {
    expect(Moment('2017-01-02 23:05:48').format('DD/MM/YYYY hh:mm:ss A')).toBe('02/01/2017 11:05:48 PM');
  });

  it('should convert a predetermined datetime to UTC', () => {
    expect(Moment('2017-01-02 23:05:48.000+05:00').tz('UTC').format('DD/MM/YYYY hh:mm:ss A')).toBe('02/01/2017 06:05:48 PM');
  });
});
