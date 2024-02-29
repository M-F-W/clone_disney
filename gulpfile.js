const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function scripts() {
    return gulp
        .src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts"));
}

function styles() {
    return gulp
        .src("./src/styles/**/*.sass")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("./dist/styles"));
}

function images() {
    return gulp
        .src("./src/images/**/*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/src/images"));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function () {
    gulp.watch("./src/styles/*.sass", gulp.parallel(styles));
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
};
