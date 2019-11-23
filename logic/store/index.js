import { StoreProvider, createStore } from 'easy-peasy'
import { thunk } from 'easy-peasy'
import event from './event'

const model = {
  event,
  initialise: thunk(async (actions, payload, { dispatch }) => {
    // await dispatch.todos.fetchTodos()
  }),
}

const store = createStore(model)

export default store
