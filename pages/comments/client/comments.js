Template.comments.helpers({
	commentsdata: function(){
		return Comments.find({},{sort:{createdAt:-1}, limit:3});},
	
	
})

Template.comments.events({
	"click .js-submit-comment": 
	 function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const comment_text = $(".js-user-comment").val();
	   const comment_obj =
	   {text: comment_text,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    Comments.insert(comment_obj);
	    $(".js-user-comment").val("");
	    //Router.go('/');
	    console.log("Did we get here????")
	}
})