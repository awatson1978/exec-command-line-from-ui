SystemWrapper = {
  standardOut: function(error, stdout, stderr) {
    var sys = Npm.require('sys');
    sys.puts(stdout);
  }
};

Meteor.methods({
  runCommand: function(commandString){
    console.log('runCommand');

    Npm.require('child_process').exec(commandString, SystemWrapper.standardOut);
    return true;
  }
});
