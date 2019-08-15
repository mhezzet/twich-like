import { useEffect } from 'react'
import { useStoreActions, useStoreState } from 'easy-peasy'

export default function useStreams() {
  const fetchStreams = useStoreActions(actions => actions.stream.fetchStreams)
  const streams = useStoreState(state => state.stream.streams)

  useEffect(() => {
    fetchStreams()
  }, [fetchStreams])

  return streams
}
