/* eslint-disable */
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/'],
        postProcess (renderedRoute) {
          renderedRoute.html = renderedRoute.html.replace(/(\<head\>.*?)(\<script.*?\<\/script\>){1,}(.*\<\/head\>)/g, '$1$3');
          return renderedRoute
        }
        // renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
        //   // We need to inject a value so we're able to
        //   // detect if the page is currently pre-rendered.
        //   inject: {},
        //   // Our view component is rendered after the API
        //   // request has fetched all the necessary data,
        //   // so we create a snapshot of the page after the
        //   // `data-view` attribute exists in the DOM.
        //   //renderAfterElementExists: '[data-view]',
        // }),
      })
    ]
  }
}
