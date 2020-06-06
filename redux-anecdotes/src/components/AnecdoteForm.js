import React from 'react'
import { connect } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ addNew }) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    if(anecdote !== '') {
      addNew(anecdote)
      event.target.anecdote.value = ''  
    }
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit = {addAnecdote}>
        <div><input name = 'anecdote' /></div>
        <button type = 'submit'>create</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  addNew
}
export default connect(null, mapDispatchToProps)(AnecdoteForm)