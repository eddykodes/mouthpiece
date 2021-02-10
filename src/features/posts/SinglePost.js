import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function SinglePost({ match }) {
  const { postId } = match.params
  let history = useHistory()

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
  )

  const handleBack = () => {
    history.push('/posts')
  }

  if (!post) {
    return (
      <section>
        <h1>Post not found</h1>
      </section>
    )
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>
        {post.content}
      </p>
      <button type="submit" onClick={handleBack} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
        Back
      </button>
    </div>
  )
}
