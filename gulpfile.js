// Require Gulp
const gulp = require("gulp");
// Require Gulp Concat Plugin
const concat = require("gulp-concat");
// Require Gulp Terser Plugin
const terser = require("gulp-terser");
// Require Gulp CleanCSS Plugin
const cleanCSS = require("gulp-clean-css");
// Require Gulp Rename Plugin
const rename = require("gulp-rename");

// Function that concatenates and minifies all the website js files
function concatJs() {
  return gulp
    .src([
      "src/scripts/app.js",
    ])
    .pipe(concat("app.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(terser())
    .pipe(gulp.dest("build/scripts"));
}

// Function that concatenates and minifies all the website css files
function concatCss() {
  return gulp
    .src([
      "src/styles/css/reset.css",
      "src/styles/css/styles.css",
    ])
    .pipe(concat("styles.css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("build/styles"));
}

gulp.task("default", gulp.series(concatJs, concatCss));