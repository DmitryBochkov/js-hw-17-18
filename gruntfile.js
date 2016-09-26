module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        options: {
          separator: ';\n',
        },
        jsFiles: {
          src: ['src/js/**/*.js'],
          dest: 'dist/js/main.js',
        }
      },
      uglify: {
        build: {
            src: 'dist/js/main.js',
            dest: 'dist/js/main.min.js'
        }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/main.min.css': ['src/css/reset.css', 'src/css/uniform.default.css', 'src/css/style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
