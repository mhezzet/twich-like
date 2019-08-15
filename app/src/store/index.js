import { createStore } from 'easy-peasy'
import auth from './models/Auth'
import stream from './models/Stream'

const store = createStore({ auth, stream })

export default store
