import '../App.scss';
import { v4 as uuidv4 } from 'uuid';
const UserInput=(p)=>{
    return(
         <div className="UserInput" >
        <input  value={p.inputValue} onChange={(e)=>p.OnInputChangeHandler(e.target.value)} className="UserInput__Text" type="text" />
        <button onClick={p.OnCancleHandler} className="UserInput__Cancle">Cancle</button>
        <button onClick={()=>p.OnAddHandler(uuidv4())} className="UserInput__Add">Add</button>
         </div>
    )
}

export default UserInput;