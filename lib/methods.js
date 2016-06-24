Meteor.methods({

  "insertRide":
    function(rideObj){
      // validate this object
        Rides.insert(rideObj);
      },

  "removeRides":
    function(){
      if (Meteor.user().emails[0].address=="tjhickey@brandeis.edu")
           Rides.remove({});
    },



})
