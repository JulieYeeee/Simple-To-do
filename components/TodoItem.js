import React from "react";


const TodoItem = ({ setNotice, setList, list, itemObj }) =>{

    const remove = () =>{
        if(list[0]!==null){
            let newList;
            for(let num = 0 ; num < list.length ; num++){
                if(list[num].id === itemObj.id){
                    list.splice(num,1);
                    newList=JSON.parse(JSON.stringify(list));
                    setList(newList);
                }
            }

        }else{
            setNotice("尚未有待辦事項");
        }
    }
    return(
        <div className="todo-item" >
            <p>{itemObj.item}</p>
            <div className="delete-btn" onClick={remove}>刪除</div>
        </div>
    )
}

export default TodoItem;