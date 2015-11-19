/*
 * grunt-gen-env
 * https://github.com/sorenson/grunt-gen-env
 *
 * Copyright (c) 2015 Sorenson Media
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('grunt_gen_env', 'Generating environment files from a configuration file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      src_file: 'default.environments.json',
      environment: 'development',
      target_directory: '.',
      file_name: 'environment.js'
    });

    // Read environments file and store as a variable.
    var environments_content = grunt.file.readJSON(options.src_file);

    // Extract environment specific settings.
    var file_contents = environments_content[options.environment];

    // Build file path/name that will be created.
    var path_name = options.target_directory +'/'+ options.file_name;

    // Write new file(s).
    grunt.file.write(path_name, JSON.stringify(file_contents));
  });

};
