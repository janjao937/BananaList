import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.scss';
import Header from "./component/Header";
import Container from "./component/Container";
import UserInput from "./component/UserInput";



function App() {

  const [allTask,setAllTask] =useState([]);
  const [inputState,setInput] = useState("");

  const OnInputChangeHandler=(e)=>{
    setInput(e);
  }

  const OnCancleHandler=()=>{
    setInput((e)=>"");
  }

  const OnAddHandler=(id)=>{
    if(inputState != null || inputState.trim()!=""){
        setAllTask([{Task:inputState,id:id,isEdit:false},...allTask]);
        OnCancleHandler();
    }
  }

  const OnItemDeleteHandeler = (id)=>{
      const newAllTask = allTask.filter((e)=>e.id != id);
      setAllTask([...newAllTask]);
  }
  const OnEditHandeler =(id,text)=>{
      const editObjIndex = allTask.findIndex(e=>e.id==id);
      const editObj = allTask.find(e=>e.id==id);

      //Change value
      editObj.isEdit=!editObj.isEdit;
      editObj.Task = text;
    
      //Update array
      const newArray = allTask;
      newArray.splice(editObjIndex,1,editObj)
   
      //re render
      setAllTask([...newArray]);
  }

  return (
    <div className="App">
      <Header/>
      <UserInput OnAddHandler={OnAddHandler} OnCancleHandler={OnCancleHandler} OnInputChangeHandler ={OnInputChangeHandler} inputValue = {inputState} />
      {/* <div className="UserInput" >
        <input  value={inputState} onChange={(e)=>OnInputChangeHandler(e.target.value)} className="UserInput__Text" type="text" />
        <button onClick={OnCancleHandler} className="UserInput__Cancle">Cancle</button>
        <button onClick={()=>OnAddHandler(uuidv4())} className="UserInput__Add">Add</button>
      </div> */}

      <Container allTask = {allTask} OnEditHandeler ={OnEditHandeler} OnItemDeleteHandeler ={OnItemDeleteHandeler}/>
    </div>
  );
}

export default App;
