# gulp-css-minify
A gulp plugin to minify css or less.

## Information

<table>
<tr>
<td>Package</td><td>gulp-css-minify</td>
</tr>
<tr>
<td>Description</td>
<td>Ejs plugin for gulp</td>
</tr>
</table>

## Installation

```
npm install gulp-css-minify
```

## Basic Usage

```js
var cssMinify = require('gulp-css-minify');

gulp.task('minifyCss', function () {
  return gulp.src('./css/**/*.css')
    .pipe(cssMinify())
    .pipe(gulp.dest('./public/css'));
});
```

## Use gulp-css-minify with gulp-less

```js
var cssMinify = require('gulp-css-minify');
var less = require('gulp-less');

gulp.task('minifyCss', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less())
    .pipe(cssMinify())
    .pipe(gulp.dest('./public/css'));
});
```
