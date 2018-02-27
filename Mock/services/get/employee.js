const Mock = require('mockjs');

const tpl = {
  code: 200,
  'data|5': [
    {
      name: '@cname',
      date: '@date("yyyy-MM-dd")',
    },
  ],
};
const data = Mock.mock(tpl);

module.exports = {
  path: '/employee/:id',
  template: data,
};
