import Post from "../component/Post"
import {useEffect, useState} from "react";
import Search from "../component/Search";

export default function Home() {
  const [search, setSearch]=useState('')
  const [posts,setPosts] = useState([]);

  const filterPost=posts.filter((post)=>{
    return(
      post.title.toLowerCase().includes(search) ||
      post.title.toUpperCase().includes(search)
    )
  })

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
 
  return (
    <>
    <Search 
     search={search}
      onSearch={(mysearch)=>setSearch(mysearch)}/>
      { filterPost.length > 0 &&  filterPost.map( (post,index) => (
        <Post {...post} key={index} />
      ))}
    </>
  );
}
