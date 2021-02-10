import React from 'react'
import { useSelector } from 'react-redux'

export default function SinglePost({ match }) {
  const { postId } = match.params

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
  )

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
    </div>
  )
}
