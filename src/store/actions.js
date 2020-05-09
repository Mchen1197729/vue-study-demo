import {SYNC_ACTION} from './mutation-types'

export default {
  clickButton({commit}) {
    setTimeout(() => {
      const value = 'Hello World'
      commit(SYNC_ACTION, value)
    }, 1000)
  }
}
