var gulp = require('gulp');
var sherpa = require('style-sherpa');
var sass = require('gulp-sass');
var minify = require('gulp-clean-css');
var sequence = require('run-sequence');
var del = require('del');

// Clean _dist
gulp.task('cleanDist', function(done) {
  del('_dist');
  done();
});

// Copy Foundation - required only when updated npm package
gulp.task('copyFoundation', function() {
  return gulp.src('node_modules/foundation-sites/**/*')
      .pipe(gulp.dest('src/assets/libs/foundation-sites'));
});

// Copy Foundation motion-ui - required only when updated npm package
gulp.task('copyMotionUI', function() {
  return gulp.src('node_modules/motion-ui/**/*')
      .pipe(gulp.dest('src/assets/libs/motion-ui'));
});

// Generate styles
gulp.task('sass', function() {
  return gulp
      .src([
        'src/scss/memgraph-foundation.scss',
        'src/scss/memgraph-foundation-app.scss',
        'src/scss/memgraph-foundation-web.scss'
      ])
      .pipe(sass())
      .pipe(minify())
      .pipe(gulp.dest('_dist/css'))
});

// Copy assets
gulp.task('copyAssets', function() {
  return gulp.src('src/assets/**/*').pipe(gulp.dest('_dist/assets'));
});

// Default task - build dist
gulp.task('default', gulp.series('cleanDist', 'sass', 'copyAssets'));

// StyleGuide related tasks

// Clean _styleguide
gulp.task('cleanStyleguide', function(done) {
  del('_styleguide/*');
  done();
});

// Generate a style guide from the Markdown content
gulp.task('styleguideHtml', function(done) {
  sherpa('src/styleguide/index.md', {
    output : '_styleguide/styleguide.html',
    template : 'src/styleguide/template.hbs'
  },
         () => {done()});
});

// Build css for Styleguide
gulp.task('styleguideSass', function() {
  return gulp
      .src([
        'src/scss/memgraph-foundation.scss',
        'src/scss/memgraph-foundation-app.scss',
        'src/scss/memgraph-foundation-web.scss'
      ])
      .pipe(sass())
      .pipe(minify())
      .pipe(gulp.dest('_styleguide/css'))
});

// Copy assets for styleguide
gulp.task('copyStyleguideAssets', function() {
  return gulp.src('src/assets/**/*').pipe(gulp.dest('_styleguide/assets'));
});

// Copy html templates for styleguide
gulp.task('copyHtmlTemplates', function() {
  return gulp.src('src/styleguide/**/*.html').pipe(gulp.dest('_styleguide'));
});

// Build Styleguide
gulp.task('buildStyleguide',
          gulp.series('cleanStyleguide', 'styleguideSass', 'styleguideHtml',
                      'copyHtmlTemplates', 'copyStyleguideAssets'));
