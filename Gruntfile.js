module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({

        // http server
        connect: {
            server: {
                options: {
                    port: 9002,
                    keepalive: true,
                    hostname: '',
                    base: './'
                }
            }
        },

    });

    grunt.registerTask('default', ['connect']);
};
