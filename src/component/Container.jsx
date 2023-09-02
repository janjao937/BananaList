import "../App.scss";
import Item from "./Item";

const Container=(p)=>{
  return(
    <div className="App__Container">
    {/* <Item OnDelete={OnItemDeleteHandeler} isEdit ={true} id={0} key={0} Task="Hello"/> */}
    {p.allTask.map((e)=><Item  OnEdit ={p.OnEditHandeler} OnDelete={p.OnItemDeleteHandeler} isEdit={e.isEdit} id={e.id} key={e.id} Task={e.Task} />)}

     </div>
  )
}

export default Container;