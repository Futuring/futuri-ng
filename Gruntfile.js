'use strict';

/*global module:false*/
module.exports = function(grunt) {

  grunt.initConfig({

    requirejs: {
      std: {
        options: {
          appDir: 'app',
          baseUrl: 'scripts',
          paths: {
              angular: '../../bower_components/angular/angular',
              Restangular : '../../bower_components/restangular/dist/restangular',
              angularBootstrap: '../../bower_components/angular-bootstrap/ui-bootstrap',
              lodash: '../../bower_components/lodash/dist/lodash',
              angularUiRoute: '../../bower_components/angular-ui-router/release/angular-ui-router',
          },
          dir: 'dist/scripts',
          modules: [
            //First set up the common build layer.
            {
              //module names are relative to baseUrl
              name: '../common',
              //List common dependencies here. Only need to list
              //top level dependencies, "include" will find
              //nested dependencies.
              include: [
                'jquery',
                'app/lib',
                'app/controller/Base',
                'app/model/Base'
              ]
            },
            //Now set up a build layer for each page, but exclude
            //the common one. "exclude" will exclude nested
            //the nested, built dependencies from "common". Any
            //"exclude" that includes built modules should be
            //listed before the build layer that wants to exclude it.
            //"include" the appropriate "app/main*" module since by default
            //it will not get added to the build since it is loaded by a nested
            //require in the page*.js files.
            {
              //module names are relative to baseUrl/paths config
              name: '../page1',
              include: ['app/main1'],
              exclude: ['../common']
            },
            {
              //module names are relative to baseUrl
              name: "../page2",
              include: ["app/main2"],
              exclude: ["../common"]
            }
          ]
        }
      }
    }
  });

  // replace this line with
  // grunt.loadNpmTasks("require-js");
  // if you use this example standalone
  grunt.loadTasks("../../tasks");

  grunt.registerTask('build', 'requirejs');
};