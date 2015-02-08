Package.describe({
  summary: "This package hooks into Npm and runs something on the command line.",

  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:command-exec",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/command-exec.git"
});

Package.on_use(function (api) {
  api.add_files('command-object.js', ['server']);
});
