var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    node;

gulp.task('default', ['node-server'], function() {

});

gulp.task('watch', ['default'], function() {
    gulp.watch('./**/*.js', ['node-server']);
});

gulp.task('node-server', function() {
    if(node) node.kill();
    node = spawn('node', ['server.js'], {stdio: 'inherit'});

    node.on('close', function(code) {
        if(code === 8) {
            console.log('Error detected, waiting for changes...');
        }
    });
});
