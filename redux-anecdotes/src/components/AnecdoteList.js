import React from "react"
import { connect } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { voteMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleOnClick }) => (
  <div>
    <div>{anecdote.content}</div>
    <div>
      has {anecdote.votes}
      <button onClick={handleOnClick}>vote</button>
    </div>
  </div>
)

const AnecdoteList = ({ anecdotes, vote, voteMessage }) => {
  const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes) 
  const handleVote = (anecdote) => {
    const votedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    vote(anecdote.id, votedAnecdote)
    voteMessage(anecdote.content, 5)
  }
  return (
    <div>
      {sortedAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleOnClick={() => handleVote(anecdote)}
        />
      ))}
    </div>
  )
}

const mapStateToProps = ({ filter, anecdotes}) => {
  if(filter === '') {
    return { anecdotes }
  } 
  return {
    anecdotes: anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase()
        .includes(filter.toLowerCase().trim()))
    } 
}

const mapDispatchToProps = {
  vote,
  voteMessage
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes
