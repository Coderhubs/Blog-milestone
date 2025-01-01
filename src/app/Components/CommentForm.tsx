"use client"

import React, { useState } from "react"
import EmojiPicker, { Theme } from "emoji-picker-react"
import { MoreVertical, ThumbsUp, MessageCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

interface Comment {
  id: number
  name: string
  comment: string
  likes: number
  replies: Comment[]
}

const CommentForm = () => {
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<Comment[]>([])
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [replyingTo, setReplyingTo] = useState<number | null>(null)

  const getRandomAvatar = (name: string) => {
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (name && comment) {
      const newComment: Comment = { id: Date.now(), name, comment, likes: 0, replies: [] }
      if (replyingTo) {
        setComments(comments.map(c => 
          c.id === replyingTo 
            ? { ...c, replies: [...c.replies, newComment] }
            : c
        ))
        setReplyingTo(null)
      } else {
        setComments([...comments, newComment])
      }
      setName("")
      setComment("")

      setIsCommentSubmitted(true)
      setTimeout(() => {
        setIsCommentSubmitted(false)
      }, 3000)
    } else {
      alert("Please fill in both fields.")
    }
  }

  const handleEmojiClick = (emoji: { emoji: string }) => {
    setComment(comment + emoji.emoji)
    setShowEmojiPicker(false)
  }

  const handleEdit = (id: number) => {
    const commentToEdit = comments.find((c) => c.id === id)
    if (commentToEdit) {
      setName(commentToEdit.name)
      setComment(commentToEdit.comment)
      setComments(comments.filter((c) => c.id !== id))
    }
  }

  const handleDelete = (id: number) => {
    setComments(comments.filter((c) => c.id !== id))
  }

  const handleLike = (id: number) => {
    setComments(comments.map(c => 
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    ))
  }

  const handleReply = (id: number) => {
    setReplyingTo(id)
  }

  const renderComment = (comment: Comment, isReply = false) => (
    <li key={comment.id} className={`flex gap-3 ${isReply ? 'ml-12 mt-4' : 'mt-6'}`}>
      <Avatar className="h-10 w-10">
        <AvatarImage src={getRandomAvatar(comment.name)} />
        <AvatarFallback>{comment.name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm text-white">{comment.name}</span>
            <span className="text-xs text-gray-400">just now</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreVertical className="h-4 w-4 text-gray-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#2d2d2d] border-gray-800">
              <DropdownMenuItem
                onClick={() => handleEdit(comment.id)}
                className="text-gray-300 hover:text-white focus:text-white"
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(comment.id)}
                className="text-gray-300 hover:text-white focus:text-white"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="text-sm text-gray-300 mt-1">{comment.comment}</p>
        <div className="flex items-center gap-4 mt-2">
          <button 
            onClick={() => handleLike(comment.id)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-300"
          >
            <ThumbsUp className="h-4 w-4" />
            <span>{comment.likes}</span>
          </button>
          <button 
            onClick={() => handleReply(comment.id)}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-300"
          >
            <MessageCircle className="w-full border border-white p-2 text-cyan-400 mb-4 hover:underline hover:bg-zinc-700 rounded-lg text-center" />
            <span>Reply</span>
          </button>
        </div>
      </div>
    </li>
  )

  return (
    <div className="w-full max-w-6xl mx-auto  bg-zinc-950 p-8 rounded-2xl shadow-xl mt-12">
      {/* Comment Submission Form */}
      <div className="w-full bg-zinc-950
       p-6  max-w-6xl  mb-8">
        {isCommentSubmitted && (
          <div className="text-center text-lg font-semibold text-zinc-400 italic mb-4 animate-fadeIn">
            <p>Thank you for submitting your response!</p>
          </div>
        )}

        <h2 className="text-2xl font-bold text-white mb-6">
          {replyingTo ? 'Leave a Reply' : 'Leave a Comment'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 pl-4 pr-4 border border-gray-600 rounded-lg bg-zinc-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="relative">
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 pl-4 pr-4 border border-gray-600 rounded-lg bg-zinc-200 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
              placeholder="Write your comment..."
              rows={4}
              required
            />
          </div>

          <div className="flex space-x-4 items-center">
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-2xl p-2 bg-[#1c1c1c] rounded-full hover:bg-gray-700 transition-all"
            >
              😀
            </button>

            <button
              type="button"
              onClick={() => setComment(`**${comment}**`)}
              className="p-2 text-sm bg-[#1c1c1c] text-white rounded-full hover:bg-gray-700 transition-all"
            >
              <b>B</b>
            </button>
            <button
              type="button"
              onClick={() => setComment(`*${comment}*`)}
              className="p-2 text-sm bg- text-white rounded-full hover:bg-gray-700 transition-all"
            >
              <i>I</i>
            </button>
          </div>

          {showEmojiPicker && (
            <div className="absolute z-50 mt-2">
              <EmojiPicker onEmojiClick={handleEmojiClick} theme={Theme.DARK} />
            </div>
          )}

          <div className="text-right">
            <button
              type="submit"
              className="w-full border border-white p-2 text-cyan-400 mb-0 hover:underline hover:bg-zinc-700 rounded-lg text-center"
            >
              {replyingTo ? 'Reply' : 'Submit Comment'}
            </button>
          </div>
        </form>
      </div>

      {/* Display Comments Section */}
      <div className="w-full bg-zinc-950 ">
        <h3 className="text-xl font-semibold text-white mt-0 p-2">Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-400 italic text-sm text-center p-4">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <React.Fragment key={comment.id}>
                {renderComment(comment)}
                {comment.replies.map(reply => renderComment(reply, true))}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default CommentForm

