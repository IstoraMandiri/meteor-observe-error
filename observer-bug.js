if (Meteor.isClient) {
  testCol = new Meteor.Collection('test')

  testCol.find({}, {limit:10}).observe({
    added: function(){
      console.log('added');
    }
  });

}