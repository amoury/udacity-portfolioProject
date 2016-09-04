module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					src: 'src/sass/style.scss',
					dest: 'css/style.css'
				}]
				
			}
		},
		watch: {
  			css: {
    			files: ['src/sass/*.scss'],
    			tasks: ['sass'],
    			options: {
      				livereload: true,
    			}
  			}
		}
	});

	grunt.registerTask('default',[
		'sass',
		'watch'
		]);
}