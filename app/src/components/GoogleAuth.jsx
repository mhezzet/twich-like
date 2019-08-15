import React, { useEffect, useCallback } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import config from '../config.json'

export default function GoogleAuth() {
  const isSigned = useStoreState(state => state.auth.isSigned)
  const setAuth = useStoreActions(actions => actions.auth.setAuth)
  const resetAuth = useStoreActions(actions => actions.auth.resetAuth)

  const syncAuth = useCallback(() => {
    const auth = window.gapi.auth2.getAuthInstance()
    const signed = auth.isSignedIn.get()
    const userId = auth.currentUser.get().getId()

    signed ? setAuth(userId) : resetAuth()
  }, [resetAuth, setAuth])

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: config.CLIENT_ID,
          scope: 'email'
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()
          syncAuth()

          auth.isSignedIn.listen(() => syncAuth())
        })
    })
  }, [syncAuth])

  if (isSigned === null)
    return (
      <button className='ui red google button'>
        <i className='icon google' /> loading
      </button>
    )
  if (isSigned)
    return (
      <button
        onClick={() => window.gapi.auth2.getAuthInstance().signOut()}
        className='ui red google button'
      >
        <i className='icon google' /> Sign Out
      </button>
    )
  return (
    <button
      onClick={() => window.gapi.auth2.getAuthInstance().signIn()}
      className='ui red google button'
    >
      <i className='icon google' /> Sign In
    </button>
  )
}
