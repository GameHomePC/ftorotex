var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
//var autoprefixer = require('autoprefixer-core');
var autoprefixer = require('autoprefixer');
var googleWebFonts = require('gulp-google-webfonts');
var sass = require('gulp-sass');
var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var conf = {
    localServer: 'ftorotex.loc',
    sass: {
        watch: './sass/**/*.scss',
        watchCss: './css/**/*.css',
        libSass: './sass/**/*.scss',
        css: './css',
        map: './'
    },
    js: {
        root: './js/**/*.js'
    },
    templatesPath: './**/**/*.php',
    fonts: {
        dirFonts: './fonts',
        listFonts: './*.list'
    },
    sprite: {
        rootSprite: "images/sprite/*.png",
        imagesSprite: "./images",
        cssSprite: "./sass/sprite"
    },
    images: {
        rootImages: "images/**/**.*",
        imagesImages: "./images"
    },
    scripts: {
        watch: './js/**/*.js',
        src: ['./js/lib/*.js','./js/main.js'],
        dest: "./js/build"
    }
};

// ==============
// scripts
// ==============
gulp.task('scripts', function() {
    return gulp.src(conf.scripts.src)
        //.pipe(sourcemaps.init())
        .pipe(concat('all.js'))
        .pipe(uglify())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.scripts.dest))
        .pipe(browserSync.reload({stream: true}));
});

// ==============
// optimizationImages
// ==============
gulp.task('optimizationImages', function () {
    return gulp.src(conf.images.rootImages)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
            optimizationLevel: 7,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(conf.images.imagesImages));
});

// ==============
// sprite
// ==============
gulp.task('sprite', function () {
    var spriteData = gulp.src(conf.sprite.rootSprite).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        padding: 5,
        cssTemplate: 'handlebarsStr.css.handlebars'
    }));

    spriteData.img.pipe(gulp.dest(conf.sprite.imagesSprite));
    spriteData.css.pipe(gulp.dest(conf.sprite.cssSprite));
});

// ==============
// google-fonts
// ==============
gulp.task('google-fonts', function () {
    gulp.src(conf.fonts.listFonts)
        .pipe(googleWebFonts())
        .pipe(gulp.dest(conf.fonts.dirFonts))
});

// ==============
// sass
// ==============
gulp.task('sass', function () {
    gulp.src(conf.sass.libSass)
        //.pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 100 version'] }) ]))
        .pipe(minifyCss())
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.sass.css))
        .pipe(browserSync.reload({stream: true}));
});

// ==============
// browser-sync
// ==============
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: {
            target: conf.localServer
        },
        open: false,
        ghostMode: {
            scroll: false,
            click: false
        }
    });
});

// ==============
// watch
// ==============
gulp.task('watch', function() {
    //gulp.watch(conf.templatesPath).on('change', browserSync.reload);
    gulp.watch(conf.sass.watch, ['sass']);
    gulp.watch(conf.sprite.rootSprite, ['sprite']);
    //gulp.watch(conf.scripts.watch, ['scripts']);
});

// ==============
// default
// ==============
gulp.task('default', ['browser-sync', 'sass', 'watch', 'google-fonts', 'sprite', 'scripts']);

// ==============
// build
// ==============
gulp.task('sass-build', function () {
    gulp.src(conf.sass.libSass)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 10 version'] }) ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(conf.sass.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('build', ['sass-build']);
