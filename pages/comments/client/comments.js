Template.comments.helpers({
	
})

Template.comments.events({
	"click .js-submit-comment": 
	 function(event){
	   event.preventDefault();
	   console.dir(event);
	   const comment_text = $(".js-user-comment").val();
	   const comment_obj =
	   {text: comment_text,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    console.dir(comment_obj);
	    //Router.go({{pathFor 'home'}});
	    $(".js-user-comment").val("");
	}
})