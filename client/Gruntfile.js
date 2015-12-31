'use strict'

module.exports = function (grunt) {

  grunt.registerTask('foo', 'A sample task that logs stuff.', function (arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(this.name + ", no args");
    } else {
      grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
    }
  });

  grunt.initConfig({
    ts: {
      default : {
        src: ["**/*.ts", "!node_modules/**/*.ts","!typings/**/*.ts"],
        options: {
          module: 'commonjs'
        }
      }
    },
    watch: {
      ts_server: {
        files: ['app/**/*', '*.ts'],
        tasks: ['ts'],
        options: {
          livereload: true
        },
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ignore: ['node_modules/**', 'typings/**'],
          ext: 'ts,js,tsx',
          watch: ['public/**/*', '.'],
          delay: 1000
        }
      }
    },
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      dev: {
        tasks: ['watch:ts_server', 'nodemon']
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-concurrent");

  grunt.registerTask("default", ["ts", "concurrent:dev"]);
};
