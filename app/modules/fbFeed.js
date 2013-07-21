define([
  'jquery',
  'underscore',
  'backbone'
],
function(
  $,
  _,
  Backbone
){
  var fbFeed = {};

  fbFeed.Model = Backbone.Model.extend({
    url: function(){
      return 'https://graph.facebook.com/' + this.options.user + '/posts?limit=' + this.options.limit + '&access_token=' + this.options.access_token;
    },
    options: {
      access_token: 'AAAC7gAoWDQ0BAIWZCUrYRPlMwkTAEmo6g3QTdkfqkP68jAiHXxJZA1hFcCvUZCar5VnbZBjWZAYSEE1ZCZBLcnGTQ0eWqFI9FsZD',
      user: 'austinpetstylist',
      limit: 1
    },
    parse: function(data){
      return data.data[0];
    }
  });

  fbFeed.View = Backbone.View.extend({
    template: _.template('<%= message %>'),
    attributes: {
      'class': 'fbFeed'
    },
    render: function() {
      var template = this.template(this.model.attributes);

      this.$el.html(template);

      return this;
    },
    initialize: function(options){
      var that = this;
      console.log('model', this.model);
      this.model.fetch().done(function(){that.render();});
    }
  });

  return fbFeed;
});