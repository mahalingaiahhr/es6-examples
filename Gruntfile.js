module.exports = function(grunt) {

  var fileMapping = grunt.file.readJSON('files.json');
  var templateString = grunt.file.read('template.html');

  grunt.initConfig({
    connect:{
      server:{
        options: {
          port: 8080,
          keepalive: true,
          base: 'build',
          open:{
            target: 'http://localhost:<%= connect.server.options.port %>', // target url to open
            callback: function() {console.log("Application is running in browser")} // called when the app has opened
          }
        },
      }
    },

    clean: {
      build: {
        src: ["build"]
      }
    },

    copy: {
      js:{
        files: [
          {
            expand: true, flatten: true,
            src: ['examples/*.js'],
            dest: 'build/',
            rename: function(dest, src) {
              var name = fileMapping[src];
              grunt.file.write(dest + name+'.html', templateString.replace("FILENAME", name+".js"));
              return dest + name +".js";
            }
          }
        ]
      },
    },

    replace: {
      console: {
        src: ['build/*.js'],
        overwrite: true,                 // overwrite matched source files
        replacements: [{
          from: "console.log",
          to: "log"
        }]
      }
    },

    eslint: {
      target: ['examples/promises.js']
    }

  });

 grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.registerTask('default', ['clean', 'copy', 'replace']);

};
