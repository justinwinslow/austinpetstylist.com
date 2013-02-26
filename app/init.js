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
        // Modules
        somemodule: 'modules/module'
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
        'somemodule'
    ],
    function ($, _, Backbone, Handlebars, somemodule) {
        if (debug) console.log($);
        if (debug) console.log(_);
        if (debug) console.log(Backbone);
        if (debug) console.log(Handlebars);
        if (debug) console.log(somemodule);

        window.myApp = window.myApp = {};

        myApp.myModule = new somemodule.view.main({name: 'My New Module'});
        myApp.myModule.trigger('myEvent', {event: 'myEvent'});
    }
);