import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostsList() {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-4" key={post.id}>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {post.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {post.content.substring(0,100)}
        </p>
        <Link to={`/posts/${post.id}`}>More</Link>
      </div>
    </div>
  ))

  return (
    <section className="posts-list">
      {renderedPosts}
    </section>
  )
}
