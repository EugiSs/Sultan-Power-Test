import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import cleanCss from 'gulp-clean-css'
import webpcss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMQ from 'gulp-group-css-media-queries'

const sass = gulpSass(dartSass)

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemaps: app.isDev })
      // .pipe(app.plugins.gulpIf(app.isBuild, webpcss()))
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      // .pipe(app.plugins.gulpIf(app.isBuild, groupCssMQ()))
      // .pipe(
      //   app.plugins.gulpIf(
      //     app.isBuild,
      //     webpcss({
      //       noWebpClass: '.no-webp',
      //       webpClass: '.webp'
      //     })
      //   )
      // )
      .pipe(app.plugins.gulpIf(app.isBuild, autoPrefixer({ grid: true })))
      .pipe(app.plugins.gulpIf(app.isBuild, groupCssMQ()))
      .pipe(
        app.plugins.gulpIf(
          app.isBuild,
          cleanCss({
            level: {
              2: {
                specialComments: 0
              }
            }
          })
        )
      )
      .pipe(rename({ extname: '.min.css' }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())

  )
}
