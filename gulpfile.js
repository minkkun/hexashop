var gulp = require("gulp");
var uglifycss = require("gulp-uglifycss");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
const { watch, series } = require("gulp");
var browserSync = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var del = require("del");
var runSequence = require("run-sequence");
const htmlmin = require('gulp-htmlmin');
 
gulp.task('html', () => {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task("clean:dist", async function () {
  return del.sync("dist");
});

gulp.task("images", function () {
  return gulp
    .src("./src/images/*.+(png|jpg|gif|svg)")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "src/",
        directory: true,
    },
  });
});

gulp.task("css", async function () {
  return gulp
    .src("./src/**/*.css")
    .pipe(concat("all.css"))
    .pipe(
      uglifycss({
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("scripts", async function () {
  return gulp
    .src("./src/**/*.js")
    .pipe(concat("all.js"))
    .pipe(
      uglify().on("error", function (e) {
        console.log(e);
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task(
  "build",
  gulp.series("clean:dist", "scripts", "css", "html", "images"),
  function () {}
);

gulp.task("watch", gulp.series("browser-sync"), function () {
  gulp.watch("./src/**/*.css", gulp.series("css"));
  gulp.watch("./src/**/*.js", gulp.series("scripts"));
});
