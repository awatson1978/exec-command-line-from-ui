if (Meteor.isClient) {
  Session.set('buttonIsClicked', false);

  UI.body.buttonClicked = function(){
    return Session.get('buttonIsClicked');
  };

  UI.body.events({
    'click #runCommand':function(){
      Meteor.call('runCommand', function(error,result){
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
}
