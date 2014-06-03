SystemWrapper = {
  standardOut: function(error, stdout, stderr) {
    var sys = Npm.require('sys');
    sys.puts(stdout);
  }
};

Meteor.methods({
  runCommand: function(){
    console.log('runCommand');

    Npm.require('child_process').exec("ls -la", SystemWrapper.standardOut);
    return true;
  }
});
