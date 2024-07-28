import React from 'react'
import { formatISO9075 } from "date-fns";
function Post({title,summary,content,file,createdAt}) {
  return (
    <div className="post">
      <div className="image">
      <img src='https://images.unsplash.com/photo-1532892939738-86e29515dc9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww'/>
      
      </div>
      <div className="content">
      <h2> {title}</h2>
      <p className='info'>
        <a className='author'> Augustine Cudjoe</a>
        <time>{formatISO9075(new Date(createdAt))}</time>
      </p>
       <p className='summary'> {summary} </p>
    
      </div>
    </div>
  )
}

export default Post;