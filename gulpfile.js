var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var minifyCSS = require("gulp-clean-css");
var minifyJS = require("gulp-minify");

gulp.task("flex", function(){
    gulp.src("css/wiki.css")
        .pipe(autoprefixer())
        .pipe(gulp.dest("build"))
});

gulp.task("cleanCSS", function(){
    gulp.src("css/wiki.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("build"))
});

gulp.task("cleanJS", function(){
    gulp.src("js/wiki.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("build"))
});