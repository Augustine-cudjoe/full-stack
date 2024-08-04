import React, { useState,useRef, useEffect } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Navigate, useParams} from 'react-router-dom'

const mondules={
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ align: [] }],
  
      [{ list: 'ordered'}, { list: 'bullet' }],
      [{ indent: '-1'}, { indent: '+1' }],
  
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['link', 'image', 'video'],
      [{ color: [] }, { background: [] }],
  
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };
  const formats=[
    'bold', 'italic', 'underline', 'strike',
    'align', 'list', 'indent',
    'size', 'header',
    'link', 'image', 'video',
    'color', 'background',
    'clean',
  ]

function EditPost() {
    const [title,setTitle]=useState('')
    const [summary,setSummary]=useState('')
    const [content,setContent]=useState('')
    const [file,setFile]=useState('')

    const [redirect,setRedirect]=useState(false)
   
    const quillRef = useRef(' ');
   
    const {id}=useParams()
  
   useEffect(()=>{
    fetch('http://localhost:4000/post/'+id)
      .then(response=>{
        response.json().then(postInfo=>{
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);
            setFile(postInfo.file)
        })
      });
   },[])

 
   async function updatePost(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (file?.[0]) {
      data.set('file', file?.[0]);
    }
    const response = await fetch('http://localhost:4000/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }


if (redirect) {
  return <Navigate to={'/'} />
}
    return (
   <form id='editpost' onSubmit={updatePost}>
    <input type='text' 
     name='title'
    placeholder='Title'
    value={title} 
    onChange={(e)=>setTitle(e.target.value)}/>
    <input type='text' 

   
    name='summary'
    placeholder='Summary'
    value={summary} 
    onChange={(e)=>setSummary(e.target.value)}/>

    <input type='file' 
        name='file'
      onChange={(e)=>setFile(e.target.files)}/>
   
    <ReactQuill  
    ref={quillRef}
     theme = 'snow'
     value={content} 
      onChange={setContent}
     modules={mondules} 
     formats={formats}/>
    <button style={{marginTop:"5px"}}>Update Post</button>

    </form>
  )
}

export default EditPost;