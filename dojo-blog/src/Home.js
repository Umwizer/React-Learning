
import { useState } from 'react';
import BlogList from './Blog';
const Home = ()=>{
    const [blogs] = useState([
        {title:'My new Website',body:'lorem ipsum...' ,author:'Ruth',id:1},
        {title:'Welcome Party!',body:'lorem ipsum...',author:'Rene',id:2},
        {title:'Web dev Top Tips',body:'lorem ipsum...',author:'Ruth',id:3}
    ])
 return (
    <div className="home">
        <BlogList blogs={blogs} title ="All Blog" />
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'Ruth')} title ="Ruth's Blogs"/>
    </div>
 )
}
export default Home;