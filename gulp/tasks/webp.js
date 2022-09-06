export const fixcss = () => {
  return app.gulp
    .src(app.path.build.fixcss)
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(
      app.plugins.gulpIf(app.isBuild, app.plugins.replace(/\.png\)/g, '.webp)'))
    )
    .pipe(
      app.plugins.gulpIf(app.isBuild, app.plugins.replace(/\.jpg\)/g, '.webp)'))
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
}
