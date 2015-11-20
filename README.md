# grunt-gen-env

> Generating environment files from a configuration file.  Works great with http://stout.is/.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gen-env --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gen-env');
```

## The "grunt_gen_env" task

### Overview
In your project's Gruntfile, add a section named `grunt_gen_env` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  grunt_gen_env: {
    options: {
      // If you don't specify any options, they will use the values
      // listed below.
      assign_to_variable: false,
      variable_name: 'ENV',
      src_file: 'default.environments.json',
      environment: 'development',
      target_directory: '.',
      file_name: 'environment.js'
    },
    development: {
      // Label this block whatever you want and add any environment
      // specific options from above here.  Any options not specified
      // here will fall back to the defaults.
    }
  },
});
```

### Options

#### options.assign_to_variable
Type: `Boolean`
Default value: `false`

By default the environment isn't assigned to a variable. To assign the object to a variable, assign this value to true.

#### options.variable_name
Type: `String`
Default value: `'ENV'`

If the value of `'assign_to_variable'` is `'true'`, this `'variable_name'` is the name of the variable that the environment Object will be assigned to.

#### options.src_file
Type: `String`
Default value: `'environments.json'`

Path of the `json` file represented as a `String`. If this file doesn't exist, it will try `'default.environments.json'` or the `'src_file'` you've assigned with a prefix of `'default.'`

#### options.environment
Type: `String`
Default value: `'development'`

The `Object` name of the environment that is being used in the `options.src_file`.  This value needs to be a `String`.

#### options.file_name
Type: `String`
Default value: `'environment.js'`

`String` name of the file with `js` extension appended to it.

#### options.target_directory
Type: `String`
Default value: `'.'`

The `String` name/path of where the `environment file` will be written to.


### Sample Environments File

```
{
  "local": {
    "api": "http://local.api.com",
    "auth": "http://local.auth.com"
  },
  "development": {
    "api": "http://dev.api.com",
    "auth": "http://dev.auth.com"
  },
  "production": {
    "api": "http://api.com",
    "auth": "http://auth.com"
  }
}
```

## Release History
_(Nothing yet)_
