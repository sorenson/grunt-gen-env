/*
 * grunt-gen-env
 * https://github.com/sorenson/grunt-gen-env
 *
 * Copyright (c) 2015 Sorenson Media
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    grunt_gen_env: {
      options: {
        assign_to_variable: true,
        variable_name: 'environment',
        src_file: 'test_environments.json',
        file_name: 'environment.js',
      },
      local: {
        options: {
          environment: 'local',
          target_directory: 'app'
        }
      },
      development: {
        options: {
          environment: 'development',
          target_directory: 'dev'
        }
      },
      production: {
        options: {
          environment: 'production',
          target_directory: 'prod'
        }
      }
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

};
