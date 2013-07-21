/*
    APP CONFIG & INIT
*/

// Set debug mode [think about modifying this to be dynamic]
window.debug = true;

if (debug) console.log('init');

// Require config
require.config({
  paths: {
    // Libraries
    jquery: 'components/jquery/jquery',
    //underscore: 'components/underscore', I left this as a comment so you can see how aliasing paths can make "upgrades" easier
    underscore: 'components/lodash/lodash',
    backbone: 'components/backbone/backbone',
    handlebars: 'components/handlebars/handlebars',
    modernizr: 'components/modernizr/modernizr',
    text: 'components/text/text',
    css: 'components/css/css'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    modernizr: {
      exports: 'Modernizr'
    }
  }
});

// Start app
require(
  [
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'modules/fbFeed'
  ],
  function ($, _, Backbone, Handlebars, fbFeed) {
    window.myApp = window.myApp = {};

    myApp.modules = {};

    myApp.modules.jade = new fbFeed.View({model: new fbFeed.Model()});

    console.log(myApp.modules.jade);
    $('.content > div').append(myApp.modules.jade.$el);
  }
);
