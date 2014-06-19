module.exports = function (grunt) {
  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		requirejs: {
		  compile: {
		    options: {
			    baseUrl: "js",
			    mainConfigFile: 'js/main.js',
			    name: "main",
			    out: "built/js/main.js"
		    }
		  }
		},
		jshint: {
			options: {
		    '-W033': true,
		    '-W099': true,
		    '-W041': true,
		    '-W032': true,
		    'force': true
	  	}, 
      all: ['js/*.js']
    },
    htmlmin: {                                     // Task
	    dist: {                                      // Target
	      options: {                                 // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files
	        'built/index.html': './index.html',     // 'destination': 'source'
	      }
	    }
	  },
	  copy: {
		  main: {
		    files: [
		      // includes files within path
		      {expand: true, src: ['libs/**',], dest: 'built/', filter: 'isFile'},
		      
		      {expand: true, src: ['css/*',], dest: 'built/', filter: 'isFile'},
		      
		      {expand: true, src: ['images/**',], dest: 'built/', filter: 'isFile'}
		    ]
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  grunt.registerTask('check', ['jshint']);
  
  grunt.registerTask('default', ['jshint','requirejs', 'htmlmin', 'copy']);
  
  
}