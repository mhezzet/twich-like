import { action, thunk } from 'easy-peasy'
import streams from '../../services/streams'
import history from '../../history'

const state = {
  streams: []
}

const addedStream = action((state, payload) => {
  console.log(payload)
  state.streams.push(payload)
})

const fetchedStreams = action((state, payload) => {
  state.streams = payload
})

const fetchedStream = action((state, payload) => {
  const index = state.streams.findIndex(stream => stream.id === payload.id)

  if (index === -1) {
    state.streams.push(payload)
  } else {
    state.streams[index] = payload
  }
})

const updatedStream = action((state, payload) => {
  const index = state.streams.findIndex(stream => stream.id === payload.id)

  state.streams[index] = payload
})

const deletedStream = action((state, payload) => {
  const index = state.streams.findIndex(stream => stream.id === payload.id)
  state.streams.splice(index, 1)
})

const addStream = thunk(async (actions, payload, { getStoreState }) => {
  const userId = getStoreState().auth.userId
  const stream = { ...payload, userId }
  const response = await streams.createStream(stream)

  actions.addedStream(response.data)
  history.push('/')
})

const fetchStreams = thunk(async actions => {
  const response = await streams.readStreams()
  actions.fetchedStreams(response.data)
})

const fetchStream = thunk(async (actions, payload) => {
  const response = await streams.readStream(payload)
  actions.fetchedStream(response.data)
  return response.data
})

const updateStream = thunk(async (actions, payload) => {
  const response = await streams.updateStream(payload.id, payload)
  actions.updatedStream(response.data)
  history.push('/')
})

const deleteStream = thunk(async (actions, payload) => {
  const response = await streams.deleteStream(payload)
  actions.deletedStream(response.data)
})

export default {
  ...state,
  addedStream,
  addStream,
  fetchedStreams,
  fetchStreams,
  fetchStream,
  fetchedStream,
  updatedStream,
  deletedStream,
  updateStream,
  deleteStream
}
