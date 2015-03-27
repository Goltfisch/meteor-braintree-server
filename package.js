Package.describe({
  name: 'goltfisch:braintree-server',
  summary: 'Braintree server-Library for Meteor (Wraps the NPM-Package for Meteor)',
  version: '0.1.0',
  git: 'https://github.com/goltfisch/meteor-braintree-server.git'
});

Package.onUse(function (api) {
  api.addFiles('braintree.js', 'server');

  api.export('braintree', 'server');
});

Npm.depends({
  braintree: '1.23.0'
});
