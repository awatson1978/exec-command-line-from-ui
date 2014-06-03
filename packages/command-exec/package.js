Package.describe({
  summary: "This package hooks into Npm and runs something on the command line.",
  internal: false
});

Package.on_use(function (api) {
  api.add_files('command-object.js', ['server']);
});
