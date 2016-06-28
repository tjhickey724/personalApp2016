Meteor.methods({
  "getRecipe":
  function(ingr,dish){
    console.log("'"+ingr+"'  '"+dish+"'");
    const url = "http://www.recipepuppy.com/api/?i="+ingr+"&q="+dish+"&p=3";
    console.log(url);
    const z = Meteor.http.call("get",url);
      //"http://www.recipepuppy.com/api/?i={{ingr}}&q={{dish}}&p=3");
      //"http://www.recipepuppy.com/api/?i=onion,garlic&q=omelet&p=3");
      //console.dir(z);
      return z.content;
  },

  "test1": function(){
    return 999;
  }

})
