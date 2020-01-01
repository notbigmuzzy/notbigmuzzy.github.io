module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			options: {
				sourceMap: true,
				outputStyle: 'compressed'
			},
			dist: {
				files: {
					'css/canvas.css': 'scss/canvas/canvas.scss',
					'css/styles.css': 'scss/styles.scss'
				}
			}
		},
		postcss: {
		    options: {
		      	map: true,

		      	map: {
		          	inline: false,
		          	annotation: 'css/maps/'
		      	},

		     	processors: [
		        	require('autoprefixer')({browsers: 'last 2 versions'}),
		        	require('cssnano')()
		      	]
		    },
		    dist: {
		      	src: 'css/styles.css'
		    }
		},
		uglify: {
			build: {
				files: [{
					expand: true,
					src: 'js/**/*.js',
					dest: 'js/prod/',
				}]
			}
		},
		watch: {
			files: ['scss/**/*.scss'],
			tasks: ['sass', 'postcss'],
			reload: {
				files: ['css/styles.css'],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['sass', 'postcss', 'uglify']);
}