import React, { useState } from "react";
import List from "./List";
import "./Home.css";
import {useDispatch} from 'react-redux'
import { addList } from "../slices/todoSlice";
export default function Home() {
  const [val, setVal] = useState({
    content : ''
  })
  const dispatch = useDispatch()
  // console.log(val)
  return (
    <>
      <div className="external">
        <div className="internal">
          <div className="input-submit">
            <input type="text" placeholder="type here" onChange={(e)=>setVal({...val , content: e.target.value})}/>
            <button onClick={()=>dispatch(addList({newcontent : val.content}))} >Add</button>
          </div>
          <div>
            <List />
          </div>
        </div>
      </div>
    </>
  );
}
