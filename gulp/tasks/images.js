import webp from 'gulp-webp'
import * as imagemin from 'gulp-imagemin'
// import { plugins } from '../config/plugins'

// .src(app.path.src.images)
// .pipe(app.plugins.newer(app.path.build.images))
// .pipe(app.plugins.gulpIf(app.isBuild, webp()))
// .pipe(app.gulp.src(app.path.src.imagesDist))
// .pipe(
//   app.plugins.gulpIf(app.isBuild, app.gulp.dest(app.path.build.images))
// )
// .pipe(
//   app.plugins.gulpIf(app.isBuild, app.gulp.src(app.path.src.imagesDist))
// )
// .pipe(
//   app.plugins.gulpIf(
//     app.isBuild,
//     app.plugins.newer(app.path.build.images)
//   )
// )

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.gulpIf(app.isBuild, webp()))
    .pipe(app.gulp.src(app.path.src.imagesWebp))
    .pipe(app.plugins.gulpIf(app.isBuild, app.gulp.dest(app.path.build.images)))
    .pipe(
      app.plugins.gulpIf(app.isBuild, app.gulp.src(app.path.src.imagesWebp))
    )
    .pipe(
      app.plugins.gulpIf(app.isBuild, app.plugins.newer(app.path.build.images))
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream())
}
