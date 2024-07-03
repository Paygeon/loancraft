#!/usr/bin/env node

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { RevenueCalculator, TransactionsList } = require('./dist/bundle');

const args = process.argv.slice(2);
const componentName = args[0];

let Component;

switch (componentName) {
  case 'RevenueCalculator':
    Component = RevenueCalculator;
    break;
  case 'TransactionsList':
    Component = TransactionsList;
    break;
  default:
    console.log('Please specify a component: RevenueCalculator or TransactionsList');
    process.exit(1);
}

const renderedComponent = ReactDOMServer.renderToString(React.createElement(Component));
console.log(renderedComponent);
