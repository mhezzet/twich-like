import React from 'react'
import { useStoreState } from 'easy-peasy'
import { Link } from 'react-router-dom'
import useStreams from '../../hooks/useStreams'

export default function StreamList() {
  const streams = useStreams()
  const userId = useStoreState(state => state.auth.userId)
  const isSigned = useStoreState(state => state.auth.isSigned)

  const streamIsMine = stream => stream.userId === userId

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <h2>Streams</h2>
        {isSigned && (
          <div style={{ textAlign: 'right' }}>
            <Link to='/streams/new' className='ui button primary'>
              Create Stream
            </Link>
          </div>
        )}
      </div>
      <div className='ui celled list'>
        {streams.map(stream => (
          <div className='item' key={stream.id}>
            {streamIsMine(stream) && (
              <div className='right floated content'>
                <Link
                  to={`/streams/edit/${stream.id}`}
                  className='ui button primary'
                >
                  Edit
                </Link>
                <button className='ui button negative'>Delete</button>
              </div>
            )}
            <i className='larg middle aligned icon camera' />
            <div className='content'>
              {stream.title}
              <div className='description'>{stream.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
