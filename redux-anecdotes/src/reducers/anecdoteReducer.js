import service from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      return state.map(a => a.id !== id ? a : action.data.updatedAnecdote)
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (id, votedAnecdote) => {
  return async dispatch => {
    const updatedAnecdote = await service.update(id, votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: { id, updatedAnecdote }
    })
  }
}

export const addNew = content => {
 return  async dispatch => {
   const anecdote = await service.createNew(content)
   dispatch({
      type: 'NEW_ANECDOTE',
      data: anecdote
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await service.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}
export default anecdoteReducer