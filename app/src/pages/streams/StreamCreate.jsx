import React from 'react'
import StreamForm from '../../components/StreamForm'
import { useStoreActions, useStoreState } from 'easy-peasy'

export default function StreamCreate() {
  const createStream = useStoreActions(action => action.stream.addStream)

  const userId = useStoreState(state => state.auth.userId)
  if (!userId) return <h2>sign in first</h2>

  return (
    <div>
      <h3>Create Stream</h3>
      <StreamForm type='Create' onSubmit={values => createStream(values)} />
      <pre>
        use OBS to stream
        <br />
        Settings -> Stream
        <br />
        Stream Type : Custom Streaming
        <br />
        Server URL : rtmp://stream.mhezzet/live
        <br />
        Stream key : stream id
      </pre>
    </div>
  )
}
