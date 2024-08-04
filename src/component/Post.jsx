import React from 'react'
import { formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';
function Post({_id,title,summary,content,file,createdAt}) {
 
  function truancateText(text, maxtext){
     if(text.length <= maxtext){
      return text;
     }
     return text.substring(0, maxtext) + '...'

  }
  return (
    <>
   
     <div className="post">
      <Link to={`/post/${_id}`}>
      <div className="image">
      <img src={'http://localhost:4000/'+ file} alt='...'/>
      
      </div>
      </Link>
      <div className="content">
       <Link to={`/post/${_id}`}>
       <h2> {title}</h2>
       </Link>
      <p className='info'>
        <a className='author'>@ {summary}</a>
        <time>{formatISO9075(new Date(createdAt))}</time>
      </p>
       <div className='contents'> { truancateText(content.replace(/<[^>]*>?/gm, ''),300)} </div>
    
      </div>
    </div>
    </>
  )
}

export default Post;