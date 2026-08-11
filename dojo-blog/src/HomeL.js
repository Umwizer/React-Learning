import { useState } from "react";
const HomeL = () => {
    // let name = 'Ruth'
    const [name,setName] = useState('mario');
    const [age,setAge] = useState(21);
    const handleClick = ()=>{
       setName('Rene');
       setAge(25)
    }
    return ( 
        <div className="home">
            <h2>App Component</h2>
            <p>{name} is age {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={()=>{
                HandleClickAgain('Ruth')
            }}>Click Me again</button> */}
        </div>
     );
}
 
export default HomeL;