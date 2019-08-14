import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

export default function GoogleAuth() {
  const isSigned = useStoreState(state => state.auth.isSigned)
  const setAuth = useStoreActions(actions => actions.auth.setAuth)
  const resetAuth = useStoreActions(actions => actions.auth.resetAuth)

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '984984879958-4mmnd6hgl47dpvvu0opn26i0pqb11gqv.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance()
          syncAuth()

          auth.isSignedIn.listen(() => syncAuth())
        })
    })
  }, [])

  function syncAuth() {
    const auth = window.gapi.auth2.getAuthInstance()
    const signed = auth.isSignedIn.get()
    const userId = auth.currentUser.get().getId()

    signed ? setAuth(userId) : resetAuth()
  }

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
