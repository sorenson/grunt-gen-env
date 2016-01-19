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
      assign_to_variable: false,
      global_variable: false,
      variable_name: 'ENV',
      src_file: 'environments.json',
      environment: 'development',
      target_directory: '.',
      file_name: 'environment.js'
    });

    // Read environments file and store as a variable.
    // Set default prefix as backup.
    var default_src_file = 'default.'+ options.src_file;
    if (grunt.file.exists(options.src_file)) {
      var environments_content = grunt.file.readJSON(options.src_file);
    } else {
      var environments_content = grunt.file.readJSON(default_src_file);
    }

    var generated_comment = '// ==============================================\n'+
                            '// Generated with `grunt_gen_dev`.\n'+
                            '// See https://github.com/sorenson/grunt-gen-env for more details.\n'+
                            '// Modify the `'+ options.environment +'` object in `'+ options.src_file +'`\n'+
                            '// if you need this changed.\n'+
                            '// ==============================================\n\n';

    // Extract environment specific settings.
    if(options.assign_to_variable) {
      if(options.global_variable){
        var file_contents = generated_comment + options.variable_name +' = '+ JSON.stringify(environments_content[options.environment]);
      }else{
        var file_contents = generated_comment +'var '+ options.variable_name +' = '+ JSON.stringify(environments_content[options.environment]);
      }
    } else {
      var file_contents = generated_comment + JSON.stringify(environments_content[options.environment]);
    }

    // Build file path/name that will be created.
    var path_name = options.target_directory +'/'+ options.file_name;

    // Write new file(s).
    grunt.file.write(path_name, file_contents);
  });

};
