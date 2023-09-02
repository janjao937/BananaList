import "../App.scss";
import { VscEdit,VscTrash } from "react-icons/vsc";
import { useState } from "react";

const Item =(p)=>{

    const [textInput,editTextInput] = useState(p.Task);
   

    const OnEditText =(e)=>{
        editTextInput(e);
    }

    return(
        <div className="Item">
        {p.isEdit?<input className="Item__Name" onChange={(e)=>OnEditText(e.target.value)} value={textInput} type="text"/>:<div className="Item__Name">{p.Task}</div>}
        <span onClick={()=>p.OnEdit(p.id,textInput)} className='Item__Edit'><VscEdit/></span>
        <span onClick={()=>p.OnDelete(p.id)} className='Item__Delete'><VscTrash/></span>
      </div>
    )
}
export default Item;