import axios from 'axios'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const anecdote = asObject(content)
  const response = await axios.post(baseUrl, anecdote)
  return response.data
}

const update = async (id, updatedAnecdote) => {
  const url = `${baseUrl}/${id}`
  const response = await axios.put(url, updatedAnecdote)
  return response.data
}

export default { getAll, createNew, update }