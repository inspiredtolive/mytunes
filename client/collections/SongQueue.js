// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {
    this.on('add', function() {
      console.log('add was triggered', this);
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function () {
      console.log('Song queue heard the song end');
      this.remove(this.models[0]);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if (song === this.models[0]) {
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);
    

  },
  playFirst: function () {
    this.models[0].play();
  },
  

});