PlayersList = new Mongo.Collection('players');

console.log("Hello world");

if(Meteor.isClient){
  console.log("Hello client");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected";
      }
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      var playerID = this._id;
      Session.set('selectedPlayer', playerID);
      var selectedPlayer = Session.get('selectedPlayer');
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}
