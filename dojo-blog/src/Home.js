
import { useState } from 'react';
import BlogList from './Blog';
const Home = ()=>{
    const [blogs,setBlogs] = useState([
        {title:'My new Website',body:'lorem ipsum...' ,author:'Ruth',id:1},
        {title:'Welcome Party!',body:'lorem ipsum...',author:'Rene',id:2},
        {title:'Web dev Top Tips',body:'lorem ipsum...',author:'Ruth',id:3}
    ])
const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}
 return (
    <div className="home">
        <BlogList blogs={blogs} title ="All Blog" handleDelete={handleDelete} />
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'Ruth')} title ="Ruth's Blogs" handleDelete={handleDelete}/>
    </div>
 )
}
export default Home;