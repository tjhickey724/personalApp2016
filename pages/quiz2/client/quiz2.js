Template.quiz2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    sort: "name",
    show: 10,
		who: "none",


  });
  console.log("creating the template");
  console.dir(this.state);
});


Template.quiz2.helpers({
	donations: function(){
    const instance = Template.instance();
    const sort = instance.state.get("sort");
    const show= instance.state.get("show");
    console.log("sort="+sort);
    let donations = [];
    switch(sort){

      case "name":
            donations =
                Donations.find({},{sort:{name:1}, limit:show});
            console.dir(donations);
            break;

      case "who":
            donations =
                Donations.find({},{sort:{who:-1}, limit:show});
            break;


      case "amount":
            donations =
              Donations.find({},{sort:{amount:-1}, limit:show});
            break;

      default:
            donations =
              Donations.find({},{sort:{createdAt:-1}, limit:show});
            break;


       }
		return donations;
  },


})

Template.quiz2.events({
  "change .js-sort": function(event,instance){
    const sortby = $(".js-sort").val();
    instance.state.set("sort", sortby);
    console.log("sortby="+sortby);
  },
});

Template.donationForm.events({

	"click .js-share": function(event,instance){
	   event.preventDefault();
	   //console.dir(event);
	   const  name = $(".js-name").val();
	   if (name=="") {
	   	window.alert("you must enter a name!");
	   	return;
	   }
	   const amount = parseInt($(".js-amount").val());
		 const who = $(".js-who").val();
	   const donation_obj =
	   {name,amount,who,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
		};
	    //console.dir(comment_obj);
	    Donations.insert(donation_obj);
	    $(".js-name").val("");
			$(".js-amount").val("");
	    //Router.go('/');
	    console.log("Did we get here????")
	},
});


Template.donationRow.events({
	"click .js-delete-comment": function(event){
		console.log("clicked on the x");
		console.dir(this);
		Donations.remove(this.d._id);
	},
})


Template.home.helpers({
  theColor: function(){
    const instance = Template.instance();
    const c = instance.state.get("color");
    return c;
  },

  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },

  recipes: function(){
    const instance = Template.instance();
    return instance.state.get("recipes");
  },

});

Template.home.events({
  "change .js-color": function(event,instance){
    const c = instance.$(".js-color").val();
    instance.state.set("color",c);
    // change the color field of the state object ...
  },

  "click .js-pusher": function(event,instance){
    const c = instance.state.get("counter");
    instance.state.set("counter",c+1);
  },

  "click .js-recipe": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const ingr = $(".js-ingr").val();
    const dish = $(".js-dish").val();
    Meteor.apply("getRecipe",[ingr,dish],{returnStubValue: true},
      function(error,result){
        console.dir(error);
        r = JSON.parse(result);
        console.dir(r);
        return instance.state.set("recipes",r.results);
      });
  },



});
