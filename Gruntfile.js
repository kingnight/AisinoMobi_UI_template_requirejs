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
    htmlmin: {                                     
	    dist: {                                      
	      options: {  
	      	minifyJS:true,
	        minifyCSS:true,	                               
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
		      {expand: true, src: ['images/**',], dest: 'built/', filter: 'isFile'}
		    ]
		  }
		},
		cssmin: {
		  combine: {
		    files: {
		      'built/css/custom.css': ['css/custom.css']
		    }
		  }
		},
		clean: {
		  build: {
		    src: ["built"]
		  }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('check', ['jshint']);
  
  grunt.registerTask('default', ['jshint','requirejs', 'htmlmin','cssmin','copy']);
  
  
}