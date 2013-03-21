define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
  var fbUser = {};

  fbUser.model = Backbone.Model.extend({
    initialize: function(){
      this.fetch();
    },
    url: 'https://graph.facebook.com/justin.winslow.56/feed?access_token=AAACEdEose0cBAF5ZCRIgDjAOfZAQKZCgve8fsxAo9chUi9KhbOM0tPm08iPrY4ex02oZAldB9P6yhiR8wsBoEW2N1STV4RkCF2p5W3beckDC702ElAbD',
    parse: function(data){
      console.log('parse: ', data);
    }
  });

  return fbUser;
});