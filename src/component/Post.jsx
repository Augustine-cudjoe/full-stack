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
   
     <div className="post border border-indigo-600">
      <Link to={`/post/${_id}`}>
      <div className="image">
      <img src={'http://localhost:4000/'+ file} alt='...' className='md:h-[250px] h-auto '/>
      
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
         <Link to={`/post/${_id}`} className='flex items-center gap-1 text-sky-300' > 
            
            Read more 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" className="size-6 text-2xl">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

         
         
</Link>
      </div>
    </div>
    </>
  )
}

export default Post;