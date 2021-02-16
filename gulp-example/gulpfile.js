const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const watch = require('gulp-watch');

gulp.task('default', () => {
    return gulp.src('app/*.jsx')
    .pipe(sourcemaps.init()) //Запускает анализ файлов для построения отладочных карт исходного кода
    .pipe(babel({
        presets: ['es2015', 'react'] // Настраивает gulp-babel для использования ES2015 и React
    }))
    .pipe(concat('all.js')) //Объединяет все файлы с исходным кодом в all.js
    .pipe(sourcemaps.write('.')) //Записывает файлы с картами отдельно.
    .pipe(gulp.dest('dest')); //Перенаправляет все файлы в dist/folder.
});

gulp.task('watch', () => {
    watch('app/**.jsx', () => gulp.start('default'));
});