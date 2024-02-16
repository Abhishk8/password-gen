
import { useEffect, useState } from 'react';
import './App.css'


function App() {

  
const [list, setList] = useState([
  {
  taskname: "hair cut",
  taskid: 1
  },
 { taskname: "study",
 taskid: 2
 }
]);

 

  const [task,setTask] = useState("");
  const [search,setSearch] = useState("");

  const handletask = (e) => {
    const newtaks = {
      taskid: Math.floor(Math.random()*123),
      taskname:task,
    }
    
    setList([...list,newtaks]);
    setTask('');
    console.log(list);

    
  }
  const handledelete = (id)=>{
    const result =list.filter((items)=>{
      return items.taskid !== id;
    })
    setList(result);
  }

  const searchTask = ()=>{
      list.map((items)=>{
         if(items.taskname === search) console.log("task found");
      })
  }


  return (
    <>
      <div>
        <input type='text' placeholder='Enter tasks' value={task} onChange={(e) => setTask(e.target.value)} />
        <button type='submit' onClick={handletask}> Add task</button>
        {list.map((items)=>{
          return <div id='tasks' key={items.taskid}>  <p>{items.taskname}</p><button onClick={ () =>{handledelete(items.taskid)}}>Delete</button>  </div>
        })}
      </div>

      <div><h1>Search here</h1>
      
      <input type='text' placeholder='task tasks' value={search} onChange={(e) => setSearch(e.target.value)} />
      <button type='submit' onClick={searchTask}> Search task</button>
      </div>


    </>
  )
}

export default App;



