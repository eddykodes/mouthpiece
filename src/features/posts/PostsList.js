import React from 'react'
import { useSelector } from 'react-redux'

export default function PostsList() {
  const posts = useSelector((state) => state.posts)

  const renderedPosts = posts.map((post) => (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg mb-4" key={post.id}>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {post.title}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {post.content.substring(0,100)}
        </p>
      </div>
    </div>
  ))

  return (
    <section className="posts-list">
      {renderedPosts}
    </section>
  )
}