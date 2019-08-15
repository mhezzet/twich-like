import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({ onClose, onConfirm }) {
  return ReactDom.createPortal(
    <div onClick={() => onClose()} className='ui dimmer modals visible active'>
      <div
        onClick={e => e.stopPropagation()}
        className='ui standard modal visible active'
      >
        <div className='header'>Delete Stream</div>
        <div className='content'>
          Are you sure you want to delete this stream?
        </div>
        <div className='actions'>
          <button onClick={() => onConfirm()} className='ui button negative'>
            Delete
          </button>
          <button onClick={() => onClose()} className='ui button'>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}
