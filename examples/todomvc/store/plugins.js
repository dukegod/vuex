import { STORAGE_KEY } from './mutations'
import createLogger from '../../../src/plugins/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos, loadingState }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    window.localStorage.setItem('stateLoading', loadingState)
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
