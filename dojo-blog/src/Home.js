
import { useState ,useEffect} from 'react';
import BlogList from './Blog';
const Home = ()=>{
const [blogs,setBlogs] = useState(null)
const [isPending,setIsPending] = useState(true);
useEffect(()=>{
  setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
   .then(res =>{
    return res.json();
   })
   .then(data=>{
    setBlogs(data)
    setIsPending(false);
  });
   },1000)
},[]);
 return (
    <div className="home">
        {isPending && <div>Loading...</div>}
      { blogs &&  <BlogList blogs={blogs} title ="All Blog"  />}
       {/* { blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'Ruth')} title ="Ruth's Blogs" handleDelete={handleDelete}/>} */}
       {/* {blogs && <button onClick ={()=>setName('Rene')}>Change Name</button>} */}
    </div>
 )
}
export default Home;