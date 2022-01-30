import React from "react";
import "../ToDoList/Todolist.css";




const ToDolist=(_props)=>{
const {items,deleteItem}=_props;
let length=items.length;
const ListItems=length ? (
    items.map(item =>{
        return(
            <div className="anas" key={item.id}>
                <div className="namee">
                <span className="name">{item.name}</span>
                </div>
                <div className="agee">
                <span className="age">{item.age}</span>
                </div>
                <div className="actionn">
                <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            </div>
        )
    })
    

):(
    <p> There is no Item To Show</p>
)
 return(   <div className="ListItems">
     <div>
         <span className="name title">Name</span>
         <span className="age title">Age</span>
         <span className="action title">Action</span>
         </div>
         {ListItems}

     </div>
 )
    
}
export default ToDolist;