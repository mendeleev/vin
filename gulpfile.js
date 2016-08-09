(function() {
  var gulp = require("gulp"),
      sass = require("gulp-sass"),
      browserSync = require("browser-sync");

  gulp.task("default", function() {
    browserSync.init({
      server: "./application"
    });
  });


  gulp.task("style", function() {
    return gulp.src("./application/scss/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(gulp.dest('./application/css'));
  });


})();
