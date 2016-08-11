// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: 'table',

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    console.log('rendering');
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function (songModel) {
        var entryView = new SongQueueEntryView({model: songModel});
        return entryView.render();
      })
    );
    return this.$el;
  }

});
