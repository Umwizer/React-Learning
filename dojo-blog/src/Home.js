
import { useState } from 'react';
const Home = ()=>{
    const [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...' ,author:'Ruth',id:1},
        {title:'Welcome Party!',body:'lorem ipsum...',author:'Rene',id:2},
        {title:'Web dev Top Tips',body:'lorem ipsum...',author:'Sandra',id:3}
    ])
 return (
    <div className="home">
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p>written byt { blog.author }</p>
            </div>
        ))}
        
    </div>
 )
}
export default Home;