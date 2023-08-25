import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [{ id: 1, content: "hello1" }],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addList: (state, action) => {
        // console.log(action.payload)
      let newToDO = { id: Math.random(), content: action.payload.newcontent};
      state.todoList.push(newToDO);
    },
    deleteList: (state, action) => {
      let {todoList} =  state
      state.todoList = todoList.filter((list) => list.id != action.payload.id);
    },
  },
});

export const { addList, deleteList } = todoSlice.actions;
export default todoSlice.reducer;

