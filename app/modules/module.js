/*
    BASIC MODULE DEFINITION
*/

define([
    'jquery',
    'underscore',
    'backbone',
    'modernizr',
    'css!styles/module.css'
],
function($, _, Backbone, Modernizr, css) {
    if (debug) console.log('css: ', css);
    // Create object to store the entire module
    var module = {};

    // Define module's model
    module.model = Backbone.Model.extend({
        initialize: function(options){
            this.options = _.extend(this.options, options);
            this.events();
        },
        events: function(){
            this.on('event', function(data){
                console.log('An event on model', data);
            });
        },
        destroy: function(){
            this.off();
        },
        options: {}
    });

    // Create an object for desparate views
    module.view = {};

    // Define module's primary view
    module.view.main = Backbone.View.extend({
        initialize: function(options){
            if (debug) console.log(options);

            this.model = new module.model(options);

            this.options = _.extend(this.options, options);

            if (debug) console.log(this.options.name);

            this.render();
        },
        render: function(){
            if (debug) console.log('render');

            this.$el = $('<div class="module" />');
        },
        events: function(){
            if (debug) console.log('events');

        },
        destroy: function(){
            this.off();
            this.$el.off();
            this.model.destroy();
        },
        options: {
            name: 'Default title'
        }
    });

    return module;
});