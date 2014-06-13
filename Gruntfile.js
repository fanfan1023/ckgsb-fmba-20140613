module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      build: {
        src: ['./js/jquery.min.js', './js/jquery-ui.min.js', './js/jquery.fullPage.min.js', './js/index.js'],
        dest: './js/index.concat.js'
      }
    },
    uglify: {
      build: {
        src: ['./js/index.concat.js'],
        dest: './js/index.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};