require("gulp");

const rename= require('gulp-rename');
const concat= require('gulp-concat');
const gulpif= require('gulp-if');
const sass= require('gulp-dart-sass');
const sassdoc= require('gulp-sassdoc');
const processhtml= require('gulp-processhtml');
var cssnano = require('gulp-cssnano');
const {series, parallel, src, dest, watch} = require('gulp');


function minimize_and_rename(){
    return src('css/styles.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min', extname: '.css'}))
        .pipe(dest('./dist/css'));
}

function compile(){
    return src("scss/styles.scss")
        .pipe(sass())
        .pipe(dest("dist/css"));
}


var doc_options = {
    dest: "docs",
};


function generate_docs(){
    return src("scss/styles.scss")
        .pipe(sassdoc(doc_options))
}

function html(){
    return src("*.html")
        .pipe(processhtml())
        .pipe(dest("dist"));
}

function all(){
    return src("scss/styles.scss")
        .pipe(cssnano())
        .pipe(sass())
        .pipe(rename({suffix: '.min', extname: '.css'}))
        .pipe(dest("./dist/css"));
}


function pipeline() {
    return src('css/*.css').pipe(dest('dist/css'));
}

function watchChanges(cb){
    watch('css/*.css');
    cb();
}


exports.pipeline = pipeline;
exports.watchChanges = watchChanges;
exports.all = all;
exports.compile = compile;
exports.generate_docs = generate_docs;
exports.html = html;
exports.minimize_and_rename = minimize_and_rename;
exports.generateAll = parallel(all, html);