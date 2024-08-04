import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();

  function textRelease(word, maxLength){
     if(word.length <= maxLength){
      return word
     }
     return word.substring(maxLength)
  }

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  return (
    <div className="post-page">
     
     <div className="flex justify-between items-center">
     <div className="author">by @{postInfo.author.username}</div>
      
     <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
     
     </div>
      {userInfo.id === postInfo.author._id && (
        <div className="edit-row flex justify-end">
          <Link className="edit-btn " to={`/edit/${postInfo._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            Edit 
          </Link>
        </div>
      )}
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.file}`} alt="" className="md:h-[250px] w-[100%] py-5 my-3 "/>
      </div>
      <div className="content">
      <h1 className=" md:text-4xl text-lg font-bold">{postInfo.title}</h1>
        {textRelease(postInfo.content.replace(/<[^>]*>?/gm, ''),1000000)}
      </div>

    </div>
  );
}