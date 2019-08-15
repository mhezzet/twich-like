import axios from 'axios'
import config from '../config.json'

const api = axios.create({ baseURL: config.API_HOST })

const createStream = formValues => {
  return api.post('/streams', formValues)
}

const readStreams = () => {
  return api.get('/streams')
}

const readStream = streamId => {
  return api.get(`/streams/${streamId}`)
}

const updateStream = (streamId, stream) => {
  return api.put(`/streams/${streamId}`, stream)
}

const deleteStream = streamId => {
  return api.delete(`/streams/${streamId}`)
}

export default {
  createStream,
  readStreams,
  readStream,
  updateStream,
  deleteStream
}
