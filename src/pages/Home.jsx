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
    <div>
     <section className=" mb-[20px] h-[300px] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1827130/pexels-photo-1827130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
       <div className="m-auto pt-[40%]  md:pt-[10%]">
       <Search 
     search={search}
      onSearch={(mysearch)=>setSearch(mysearch)}/>
       </div>
     </section>

       <div className="flex md:gap-3">

        <div className="flex-1 w-60">
          <div className="grid :grid-cols-1 md:grid-cols-3 gap-4">
          { filterPost.length > 0 &&  filterPost.map( (post,index) => (
        <Post {...post} key={index} />
      ))}
          </div>
        </div>
        <div className="hidden md:flex flex-col flex-none w-40">
          <h2 className="text-2xl  text-center ">Recent Posts </h2>
          <h2 className="text-2xl  text-center ">Popular Posts </h2>

        </div>
       </div>

    </div>
  );
}
