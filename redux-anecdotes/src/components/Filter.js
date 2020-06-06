import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filterReducer'

const Filter = ({ filterAnecdotes }) => {
  const style = {
    marginBottom: 10
  }

  const handleChange = (event) => {
    event.preventDefault()
   filterAnecdotes(event.target.value)
  }

  return(
    <div style = {style} >
      Filter <input onChange = {handleChange} />
    </div>
  )
}
const mapDispatchToProps = {
  filterAnecdotes
}

export default connect(null, mapDispatchToProps)(Filter)