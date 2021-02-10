import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { postUpdated } from './postsSlice'

export default function EditPostForm({ match }) {
  const { postId } = match.params

  const post = useSelector(state => 
    state.posts.find(post => post.id === postId)
  )

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  const onSavePost = (event) => {
    event.preventDefault()
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <div className="mt-10 sm:mt-0">
      <div className="my-4 md:mt-0 md:col-span-2">
        <form onSubmit={onSavePost}>
          <div className="shadow overflow-hidden sm:rounded-md bg-white">
            <div className="px-4 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6">
                  <label htmlFor="title" className="block font-medium text-gray-700">Title</label>
                  <input type="text" name="title" id="title" value={title} onChange={onTitleChanged} className="mt-1 block w-full border border-gray-300 rounded-md" />
                </div>
                <div className="col-span-6">
                  <label htmlFor="content" className="block font-medium text-gray-700">Content</label>
                  <textarea type="text" name="content" id="content" value={content} onChange={onContentChanged} className="mt-1 block w-full border border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div className="text-right px-4 pb-4 sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
