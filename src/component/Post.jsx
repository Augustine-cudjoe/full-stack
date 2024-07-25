import React from 'react'

function Post({title,summary,content,file}) {
  return (
    <div className="post">
      <div className="image">
      <img src='https://images.unsplash.com/photo-1532892939738-86e29515dc9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BsYXNofGVufDB8fDB8fHww'/>
      
      </div>
      <div className="content">
      <h2> {title}</h2>
      <p className='info'>
        <a className='author'> Augustine Cudjoe</a>
        <time>2024-07-07 12:30pm</time>
      </p>
       <p className='summary'> {summary} </p>
    
      </div>
    </div>
  )
}

export default Post;