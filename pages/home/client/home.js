Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,

  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.home.helpers({
  theColor: function(){
    const instance = Template.instance();
    return instance.state.get("color");
  },

  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },

})
