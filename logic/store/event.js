import { action, thunk } from 'easy-peasy'

export default {
  list: [
    'hi'
  ],

  // actions
  add: action((state, payload) => {
    state.list.push(payload)
  }),
  fetched: action(state => {
    
  }),

  // thunks
  fetchEvents: thunk(async actions => {
    // const todos = await mockService.fetchTodos();
    // actions.fetched(todos);
  }),
}
