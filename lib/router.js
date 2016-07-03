Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('comments');
Router.route('showRides');
Router.route('audio');
Router.route('audio2');

Router.route('/showride/:_id',
       {name:"showRide",
        data: function(){
					const c = Rides.findOne({_id:this.params._id});
					console.dir(c);
					return c
				}
  		 }
);
