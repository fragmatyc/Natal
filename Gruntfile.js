module.exports = function (grunt) {
    grunt.initConfig({
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            jsFiles: {
                options: {
                    destPrefix: 'frontend/build/js/lib'
                },
                files: {
                    'angular.min.js': 'angular/angular.min.js',
                    'bootstrap.min.js': 'bootstrap/dist/js/bootstrap.min.js',
                    'angular-messages.min.js': 'angular-messages/angular-messages.min.js',
                    'angular-route.min.js': 'angular-route/angular-route.min.js',
                    'angular-aria.min.js': 'angular-aria/angular-aria.min.js',
                    'angular-material.min.js': 'angular-material/angular-material.min.js',
                    'angular-animate.min.js': 'angular-animate/angular-animate.min.js',
                    'jquery.min.js': 'jquery/dist/jquery.min.js',
                    'moment-with-locales.min.js': 'moment/min/moment-with-locales.min.js'
                }
            },
            cssFiles: {
                options: {
                    destPrefix: 'frontend/build/css'
                },
                files: {
                    'bootstrap.min.css': 'bootstrap/dist/css/bootstrap.min.css',
                    'angular-material.min.css': 'angular-material/angular-material.min.css'
                }
            }
        },
        copy: {
            main: {
                files: {
                    'frontend/build/index.html': 'frontend/src/index.html',
                    'frontend/build/tmpl/home.html': 'frontend/src/home/view.html',
                    'frontend/build/tmpl/inscription.html': 'frontend/src/inscription/view.html',
                    'frontend/build/tmpl/tables.html': 'frontend/src/tables/view.html'
                }
            },
            images: {
                files: {
                    'frontend/build/img/cgiLogo.png': 'frontend/src/images/logo_cgi_color.png'
                }
            },
            fonts: {
                expand: true,
                cwd: 'bower_components/bootstrap/fonts',
                src: '**',
                dest: 'frontend/build/fonts',
                flatten: true,
                filter: 'isFile',
            }
        },
        uglify: {
            main: {
                files: {
                    'frontend/build/js/application.js': [
                        'frontend/src/common/module.js',
                        'frontend/src/home/controller.js',
                        'frontend/src/toolbar/controller.js',
                        'frontend/src/inscription/service.js',
                        'frontend/src/inscription/controller.js',
                        'frontend/src/tables/controller.js',
                        'frontend/src/tables/service.js',
                        'frontend/src/menu/controller.js',
                        'frontend/src/navigation/service.js'
                    ]
                }
            }
        },
        clean: ['frontend/build']
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['clean', 'bowercopy', 'copy', 'uglify']);
};