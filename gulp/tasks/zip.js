import del from 'del'
import tar from 'gulp-tar'
import gzip from 'gulp-gzip'

export const zip = () => {
  del(`./${app.path.rootFolder}.zip`)
  return app.gulp
    .src(`${app.path.buildFolder}/**/*.*`, {})
    .pipe(tar(`${app.path.rootFolder}.tar`))
    .pipe(gzip())
    .pipe(app.gulp.dest('./'))
}
