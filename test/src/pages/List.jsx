import React from "react";
import "./List.css"
import { deleteList } from "../slices/todoSlice";
import {useSelector,useDispatch} from 'react-redux'
export default function List() {
  const {todoList} = useSelector((state)=> state.todo)
  console.log(todoList)
  const dispatch =  useDispatch();
  return (
    <>
    <div className="extern">
      <div className="intern">
        {
          todoList.map(({id ,content})=>{
            return <div className="list-internal">
              
              <p>{id} .    {content}</p>
               <button onClick={()=>dispatch(deleteList({id}))}>delete</button>
            </div>
          })
        }
      </div>
    </div>
    </>
  );
}
