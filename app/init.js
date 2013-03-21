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
        css: 'components/css/css',
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
        'handlebars'
    ],
    function ($, _, Backbone, Handlebars, somemodule) {
        if (debug) console.log($);
        if (debug) console.log(_);
        if (debug) console.log(Backbone);
        if (debug) console.log(Handlebars);

        window.myApp = window.myApp = {};
    }
);
