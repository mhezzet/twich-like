import React, { useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import { Link } from 'react-router-dom'
import useStreams from '../../hooks/useStreams'
import Modal from '../../components/Modal'

export default function StreamList() {
  const [modal, setModal] = useState(false)
  const [currentStreamId, setCurrentStreamId] = useState(null)
  const streams = useStreams()
  const userId = useStoreState(state => state.auth.userId)
  const isSigned = useStoreState(state => state.auth.isSigned)
  const deleteStream = useStoreActions(actions => actions.stream.deleteStream)

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
            {streamIsMine(stream) && stream.userId && (
              <div className='right floated content'>
                <Link
                  to={`/streams/edit/${stream.id}`}
                  className='ui button primary'
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    setCurrentStreamId(stream.id)
                    setModal(true)
                  }}
                  className='ui button negative'
                >
                  Delete
                </button>
              </div>
            )}
            <i className='larg middle aligned icon camera' />
            <div className='content'>
              <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
              <div className='description'>{stream.description}</div>
            </div>
          </div>
        ))}
        {modal && (
          <Modal
            onClose={() => setModal(false)}
            onConfirm={() =>
              deleteStream(currentStreamId).then(() => setModal(false))
            }
          />
        )}
      </div>
    </div>
  )
}
