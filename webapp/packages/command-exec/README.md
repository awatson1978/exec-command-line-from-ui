awatson1978:command-exec
=============================
Run a command in the shell from the UI.


=============================
### Installation

First, install the package, like so:

````js
meteor add awatson1978:command-exec
````

=============================
### API

The Session object will support the following API with this package installed:  

````js
Meteor.call('runCommand', 'command to run');
````
It currently doesn't provide a callback.


## Testing  

View the TinyTests results by doing the following:  
````js
cd myapp/packages/command-exec
meteor test-packages
````


=============================
### Examples  

````js
Meteor.call('runCommand', 'ls -la');
````



=============================
### Licensing

MIT License.  Use as you will.
