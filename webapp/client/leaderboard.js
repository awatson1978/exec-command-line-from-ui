Session.set('buttonIsClicked', false);

Template.body.helpers({
  buttonClicked: function(){
    return Session.get('buttonIsClicked');
  }
});


Template.body.events({
  'click #runCommand':function(){
    Meteor.call('runCommand', 'ls -la', function(error,result){
      if(error){
        console.log('error', error);
      }
      if(result){
        console.log('result', result);
        Session.set('buttonIsClicked', true);
      }
    });
  }
});
