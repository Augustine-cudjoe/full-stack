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
  function truancateTitle(title, maxlength){
    if(title.length <= maxlength){
     return title;
    }
    return title.substring(0, maxlength) + '...'

 }
  return (
    <div>
   
    
    <div className="post shadow-md flex flex-col p-2 h-[500px] md:h-[550px] lg:h-[500px]">
      <Link to={`/post/${_id}`}>
      <div className="image">
      <img src={'http://localhost:4000/'+ file} alt='...' className='w-[100%] h-[180px] md:h-[150px] lg:h-[200px] '/>
      
      </div>
      </Link>
      <div className="content">
       <Link to={`/post/${_id}`}>
       <h2 className='font-bold my-2 py-3 text-lg md:text-[16px] lg:text-2xl'> {truancateTitle(title,20)}</h2>
       </Link>
      <p className='info flex items-center gap-5 mt-2 mb-1'>
        <a className='author flex items-center'>@ {summary}</a>
        <time>{formatISO9075(new Date(createdAt))}</time>
      </p>
       <div className='contents text-[16px] md:text-[14px] lg:text-[16px]'> { truancateText(content.replace(/<[^>]*>?/gm, ''),230)} </div>
         <Link to={`/post/${_id}`} className='flex items-center gap-1 text-sky-300' > 
            
            Read more 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
             stroke="currentColor" className="size-6 text-2xl">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

         
         
</Link>
      </div>
    </div>
    
   
    </div>
  )
}

export default Post;