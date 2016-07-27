Template.quiz2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    sort: "when",
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
