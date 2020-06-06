const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'VOTED':
      const message = `you voted for ${action.anecdote}`
      return message
    case 'REMOVE': 
      return null
    default:
      return state
  }
}
let timerId = null

export const voteMessage = (anecdote, time) => {
  return async dispatch => {
    dispatch({
      type: 'VOTED',
      anecdote
    })
    clearTimeout(timerId)
    timerId = setTimeout(() => dispatch(({
      type: 'REMOVE'
    })), time*1000)
    
  }
}

export default notificationReducer