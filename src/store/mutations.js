import {SYNC_ACTION} from './mutation-types'

export default {
  [SYNC_ACTION](state, value) {
    console.log(value)
  }
}
