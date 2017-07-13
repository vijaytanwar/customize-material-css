/**
 * Grunt config file
 */
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
            },
            materialJS: {
                src: [
                    //'node_modules/materialize-css/js/velocity.min.js',
                    //'node_modules/materialize-css/js/hammer.min.js',
                    //'node_modules/materialize-css/js/jquery.hammer.js',
                    'node_modules/materialize-css/js/jquery.easing.1.4.js',
                    'node_modules/materialize-css/js/initial.js',
                    'node_modules/materialize-css/js/global.js',
                    'node_modules/materialize-css/js/materialbox.js',
                    'node_modules/materialize-css/js/transitions.js',
                    'node_modules/materialize-css/js/animation.js',
                    'node_modules/materialize-css/js/animation.js',
                    'node_modules/materialize-css/js/collapsible.js'
                ],
                dest: 'js/material.js',
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'css/main.css': 'source/sass/main.scss'     // 'destination': 'source'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['concat', "sass"]);
};