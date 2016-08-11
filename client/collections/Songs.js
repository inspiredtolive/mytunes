// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    var thisCollection = this;
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs',
      method: 'GET',
      success: function (response) {
        response.results.forEach(function (songData) {
          thisCollection.add(new SongModel(songData));
        });
      },
      error: function (err) {
        console.log('Error while fetching songs', err);
      }
    });
  }

});