/* eslint-disable */
var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const productionPlugins = [
  new PrerenderSPAPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [],
    renderer: new PrerenderSPAPlugin.PuppeteerRenderer({
      renderAfterDocumentEvent: 'render-event',
      headless: false,
      // We need to inject a value so we're able to
      // detect if the page is currently pre-rendered.
      inject: {},
      // Our view component is rendered after the API
      // request has fetched all the necessary data,
      // so we create a snapshot of the page after the
      // `data-view` attribute exists in the DOM.
      //renderAfterElementExists: '[data-view]',
    }),
  }),
];

module.exports = {
  configureWebpack: (config) => {
    config.plugins.push(...productionPlugins)
  }
}
