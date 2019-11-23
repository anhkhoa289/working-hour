import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'


const Debug = () => {
  const events = useStoreState(state => state.event.list)
  const add = useStoreActions(state => state.event.add)
  return (
    <>
      <p>Debug page</p>
      {events.map(event => <span key={event}>{event} <br /></span>)}

      <button onClick={() => add('khoa')}>add</button>
    </>
  )
}

export default Debug
