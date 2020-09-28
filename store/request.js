// @flow
const { create } = require('apisauce');

const baseURL = 'https://api-search.win.gg';

// create main request configs
const request = (() =>
  // we can set header or use any condition here
  create({
    baseURL,
  })
)();

module.exports = {
  request,
  baseURL,
};
