import { useEffect, useState } from 'react'
import { useStoreActions } from 'easy-peasy'

export default function useFetchStream(id) {
  const fetchStream = useStoreActions(actions => actions.stream.fetchStream)
  const [stream, setStream] = useState({})

  useEffect(() => {
    fetchStream(id).then(stream => {
      setStream(stream)
    })
  }, [fetchStream, id])

  return stream
}
