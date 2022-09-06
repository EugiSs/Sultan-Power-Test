import fileinclude from 'gulp-file-include'
import webpHtmlNosvg from 'gulp-webp-html-nosvg'

export const html = () => {
  return (
    app.gulp
      .src(app.path.src.html)
      .pipe(fileinclude())
      .pipe(app.plugins.replace(/@img\//g, './img/'))
      .pipe(
        app.plugins.gulpIf(
          app.isBuild,
          app.plugins.replace(/\.png\"/g, '.webp"')
        )
      )
      .pipe(
        app.plugins.gulpIf(
          app.isBuild,
          app.plugins.replace(/type=\"image\/png\"/g, 'type="image/webp"')
        )
      )
      .pipe(
        app.plugins.gulpIf(
          app.isBuild,
          app.plugins.replace(/\.jpg\"/g, '.webp"')
        )
      )
      .pipe(
        app.plugins.gulpIf(
          app.isBuild,
          app.plugins.replace(/type=\"image\/jpg\"/g, 'type="image/webp"')
        )
      )
      .pipe(app.plugins.gulpIf(app.isBuild, webpHtmlNosvg()))
      .pipe(app.gulp.dest(app.path.build.html))
      .pipe(app.plugins.browserSync.stream())
  )
}