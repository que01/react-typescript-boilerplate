module.exports = {
  path: '/login',
  template: {
    username: (params, query, body) => body.username,
    authenticated: (params, query, body) => body.password === 'password1',
  },
};
