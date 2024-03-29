const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify");

// HTML Tasks
gulp.task("html", () =>
  gulp.src("src/pug/index.pug").pipe(pug()).pipe(gulp.dest("dist"))
);

// CSS Tasks
gulp.task("css", () =>
  gulp
    .src("src/scss/index.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(gulp.dest("dist/assets"))
);

// JS Tasks
gulp.task("js", () =>
  gulp
    .src("src/js/index.js")
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("dist/assets"))
);

// Watch All Tasks
gulp.task("default", () => {
  gulp.watch("src/pug/**/*.pug", gulp.series("html"));
  gulp.watch("src/scss/**/*.scss", gulp.series("css"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
});
