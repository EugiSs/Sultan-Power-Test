// Очистка папки результата
import del from 'del'

export const reset = () => {
  return del(app.path.buildFolder)
}
