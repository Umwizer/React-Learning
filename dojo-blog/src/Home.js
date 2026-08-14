
import { useState ,useEffect} from 'react';
import BlogList from './Blog';
const Home = ()=>{
    const [blogs,setBlogs] = useState(null)
const [name,setName] = useState('Ruth');

useEffect(()=>{
   fetch('http://localhost:8000/blogs')
   .then(res =>{
    return res.json();
   })
   .then(data=>{
    console.log(data);
    setBlogs(data)
   })
},[]);
 return (
    <div className="home">
      { blogs &&  <BlogList blogs={blogs} title ="All Blog"  />}
       {/* { blogs && <BlogList blogs={blogs.filter((blog)=> blog.author === 'Ruth')} title ="Ruth's Blogs" handleDelete={handleDelete}/>} */}
       {/* {blogs && <button onClick ={()=>setName('Rene')}>Change Name</button>} */}
        <p>{name}</p>
    </div>
 )
}
export default Home;