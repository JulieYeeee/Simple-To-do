import React,{ useState } from "react";
import TodoItem from "../components/TodoItem"


const List = () =>{

    let [ item , setItem ] = useState("");
    const inputChange = (e) =>{
        setItem(e.target.value);
    };
    let [ note, setNote ] = useState("尚未有待辦事項");
    let [ num , setNum] = useState(0);
    let [ list , setList ] = useState([]);    
    const addToList = (e) =>{
        e.preventDefault();
        if(item!==""){
            setNote("");
            setNum(num+1);
            setList([...list , { item:item , id:num }]);
        }
    };

    return(
        <main className="list-page-main">
            <div className="list-element-container">
                <h1>列下你的代辦事項</h1>
                <form>
                    <input onChange={inputChange} placeholder="type here..."></input>
                    <button type="submit" onClick={addToList} >新增</button>
                </form>
                <div className="bar"></div>
                <div className="todo-container">
                    <p>{note}</p>
                    {list.map(( itemObj )=>
                        <TodoItem setNote={setNote} setList={setList} list={list} itemObj={itemObj} key={itemObj.id}/>
                    )}
                </div>
            </div>
        </main>
    )
}
export default List;