/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
"use strict";

    var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    order = require('gulp-order');

    var paths = {
        angular: [
            'node_modules/angular/angular.min.js'
        ],
        appJs: [
            'scripts/app/*.js',
            'scripts/app/**/*.js'
        ],
        customStylesSass: ['content/*.scss'],
        appJsOutputFile: 'app.js',
        appJsOutputDir: 'scripts/dist'
    }

    function finished(error) {
        if (error) {
            //gutil.log(error);
            this.emit('end');
        }
    };

    //gulp.task('default', function () {
    //    // place code for your default task here
    //});

    //gulp.task('css', function () {
    //})

    gulp.task('clean', function () {
        del(['scripts/dist/**/*']);
    });

    gulp.task('custom-scripts', function () {
        del.sync(paths.appJsOutputDir + "/" + paths.appJsOutputFile);

        return gulp
            .src(paths.appJs)
            .pipe(sourcemaps.init())
                .pipe(order([
                    "scripts/app/app.js",
                    "scripts/app/routeConfig.js",
                    "scripts/app/**/*.js"
                ]))
                .pipe(uglify().on('error', finished))
                .pipe(concat(paths.appJsOutputFile))

            .pipe(sourcemaps.write('maps'))
            .pipe(gulp.dest(paths.appJsOutputDir))
            .on('end', finished);
    });

    gulp.task('custom-styles-sass', function () {
        return gulp
            .src(paths.customStylesSass)



































            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(function (file) { // output into the same folder as .scss file
                return file.base;
            }));
    });


    gulp.task('default', ['clean', 'custom-scripts', 'custom-styles-sass'], function () {
        // place code for your default task here
    });

