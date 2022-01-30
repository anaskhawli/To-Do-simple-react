import React,{Component} from 'react';

import './App.css';
import Additem from './components/AddItem/AddItem';
import ToDolist from './components/ToDoList/Todolist';

class App extends Component {
state={
  items:[
    {id:1,name:'Anas',age:23},
    {id:2,name:'Mohamad',age:25},
    {id:3,name:'ahmad',age:27},

  ]
}
deleteItem=(id)=>{
  /*let items=this.state.items;
  let i=items.findIndex(item=>item.id===id)
  items.splice(i,1)
  this.setState({items})*/
let items=this.state.items.filter(item=>{
  return item.id !==id
  
})
this.setState({items});
}
addItem=(item)=>{
  item.id=Math.random();
let items=this.state.items;
items.push(item);
this.setState({items})
}

  render(){
    return (
      <div className="App container">
      <h1 className='text-center '>To Do list</h1>  
       <ToDolist items={this.state.items} deleteItem={this.deleteItem}/>
       <Additem addItem={this.addItem}/>
      </div>
    );
  }
  
 
}

export default App;
