import gulp from 'gulp'

import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,

  isDev: !process.argv.includes('--build'),
  isBuild: process.argv.includes('--build')
}

import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { svgSprive } from './gulp/tasks/svgSprive.js'
import { zip } from './gulp/tasks/zip.js'
import { fixcss } from './gulp/tasks/webp.js'

// Отслеживание изменений в файлах
function watcher() {
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.js, js)
  gulp.watch(path.watch.images, images)
}

// Серия основных задачи
const mainTasks = gulp.series(js,images,scss,html,fixcss)

// Сценарии выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const createZip = gulp.series(reset, mainTasks, zip)

// Создание svg иконок (конвертация) - Экспортируем в package.json для отдельного запуска через npm run
export { svgSprive }

// Экспорт сценариевы
export { dev }
export { build }
export { createZip }

export default dev
