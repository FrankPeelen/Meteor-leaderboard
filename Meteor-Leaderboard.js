PlayersList = new Mongo.Collection('players');

console.log("Hello world");

if(Meteor.isClient){
  console.log("Hello client");

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
    }
  });
}

if(Meteor.isServer){
  console.log("Hello server");
}
