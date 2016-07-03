Meteor.startup(function(){
  Recording.remove({});
  Recording.insert({recording:false});

})
