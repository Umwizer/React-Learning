import { useState } from "react";
import LibrayButton from "./LibraryButton";

function LibraryMain(){
    const[count, setCount]=useState(0);
    function incrementNumber(){
        setCount(count+1);
        console.log("This is the incrememnt value "+count);
    }
    return(
        <div><main>
            <h2>WELCOME PAGE</h2>
            <LibrayButton buttonLabel="Increment" buttonAction={incrementNumber}/>
            <div>Increment value is {count}</div>
            </main>
        </div>
    )
}
export default LibraryMain;