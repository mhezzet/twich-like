import { action } from 'easy-peasy'

const state = {
  isSigned: null,
  userId: null
}

const setAuth = action((state, payload) => {
  state.isSigned = true
  state.userId = payload
})

const resetAuth = action(state => {
  state.isSigned = false
  state.userId = null
})

export default {
  ...state,
  setAuth,
  resetAuth
}
