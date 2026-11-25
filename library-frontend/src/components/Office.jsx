import { useState } from "react"
import axios from 'axios';
import LibraryButton from './LibraryButton'
function Office(){

    const [officeName,setOfficeName]=useState("");
    const [officeNmbr,setOfficeNmbr]=useState("");
    const [deleteNmbr,setDeleteNmbr]=useState("");

    async function saveOffice(){
    try {
        const response = await axios.post("http://localhost:8084/api/offices/save",{
           name:officeName,
           officeNumber:officeNmbr
        })
        if (response.status == 200) {
            alert("save successfully");
        }else{
            alert("Office is not saved");
        }
    }catch(error){
        alert("This is the error"+error)
    }   
    }

    async function deleteOffice(){
    try {
        const response = await axios.delete(`http://localhost:8084/api/offices/delete/number/${deleteNmbr}`)
        if (response.status == 200) {
            alert("deleted successfully");
        }else{
            alert("Office is not deleted");
        }
    }catch(error){
        alert("This is the error"+error)
    }
    }

 return (
    <div>
        <h1>SAVE OFFICE</h1>
        <label>OFFICE NAME:</label><input onChange={e=>setOfficeName(e.target.value)}/><br/>
        <label>OFFICE NUMBER:</label><input onChange={e=>setOfficeNmbr(e.target.value)}/><br/>
        <LibraryButton buttonAction={saveOffice} buttonLabel="SAVE"/>
        <h2>DELETE OFFICE</h2>
        <input type="text" placeholder="Office Number" onChange={e=>setDeleteNmbr(e.target.value)}/>
        <LibraryButton buttonAction={deleteOffice} buttonLabel="DELETE"/>
    </div>
 )
}
export default Office;