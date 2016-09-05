module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-responsive-images');
  	grunt.loadNpmTasks('grunt-contrib-clean');
  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-mkdir');
	

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

		/* Clear out the images directory if it exists */
    	clean: {
      		dev: {
        		src: ['images'],
      		},
    	},

		responsive_images: {
      		dev: {
        		options: {
	          		engine: 'im',
	          		sizes: [{
            			width: 1600,
            			quality: 30,
            			suffix: '_large_2x'
          			},
          			{
          				width: 800,
          				quality: 30,
          				suffix: '_small_2x'
          			}]
        		},

        /* You don't need to change this part if you don't change the directory structure. */
        		files: [{
          			expand: true,
          			src: ['*.{gif,jpg,jpeg,png}'],
          			cwd: 'img/images_src/',
          			dest: 'images/'
        			}]
      			}
    	},

   

    /* Generate the images directory if it is missing */
    	mkdir: {
      		dev: {
        		options: {
          			create: ['images']
        		},
      		},
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
		'clean',
		'responsive_images',
		'mkdir',
		'watch'
		]);
}