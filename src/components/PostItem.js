import React from 'react';

function PostHeader( { author, date }) {
  return (
    <div className="post-header">
        <img className="post-avatar" src={author.avatar} alt="Imagem de avatar"/>
      <div className="post-info">
        <h4>{author.name}</h4>
        <span>{date}</span>
      </div>
    </div>
  )
}

function PostComments( { comments }) {
  return (
    <div className="post-comments">
      <div className="post-comments-content">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} alt="Imagem de avatar" />
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function PostItem( { author, date, content, comments }) {
  return (
    <div className="post-item">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  )
}

export default PostItem;