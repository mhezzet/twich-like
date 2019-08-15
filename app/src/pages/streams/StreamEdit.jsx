import React from 'react'
import useFetchStream from '../../hooks/useFetchStream'

export default function StreamEdit({ match }) {
  const stream = useFetchStream(match.params.id)

  console.log(stream)

  return <div>stream edit {match.params.id}</div>
}
