import React from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'
import useFetchStream from '../../hooks/useFetchStream'
import StreamForm from '../../components/StreamForm'

export default function StreamEdit({ match }) {
  const stream = useFetchStream(match.params.id)
  const userId = useStoreState(state => state.auth.userId)

  const updateStream = useStoreActions(actions => actions.stream.updateStream)

  if (!userId) return <h2>sign in first</h2>
  if (userId !== stream.userId) return <h2>you are not authorized</h2>

  return (
    <div>
      <h3>Edit Stream</h3>
      <StreamForm
        type='Update'
        initialValues={stream}
        onSubmit={values => updateStream(values)}
      />
    </div>
  )
}
