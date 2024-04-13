import { Button } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { MapStateToProps, MapDispatchToProps } from "./connector";
import "./Todo.css";
const Todo = (props) => {
  const [btnText, setBtnText] = useState("Add");
  const [text, setText] = useState("");
  const { state, addTodo, deleteTodo, editTodo,checkedTodo} = props;
  const [editId, setEditId] = useState(0);
  const addTodoBtn = () => {
    if (text === "") {
      alert("Please provide input!");
    } else {
      if (btnText === "Add") {
        const id = new Date().getTime().toString();
        addTodo(id, text);
        setText("");
      }
      if (btnText === "Update") {
        const id = new Date().getTime().toString();
        setBtnText("Add");
        editTodo(editId, id, text);
        setText("");
      }
    }
  };
  const deleteTodoBtn = (id) => {
    deleteTodo(id);
  };
  const editTodoBtn = (id, text) => {
    setBtnText("Update");
    setEditId(id);
    setText(text);
  };
  const checkedTodoItem = (e,index) => {
    if (e.target.checked) {
      e.target.parentElement.parentElement.firstChild.nextElementSibling.style.textDecoration =
        "line-through";
    }
    if (!e.target.checked) {
      e.target.parentElement.parentElement.firstChild.nextElementSibling.style.textDecoration =
        "none";
    }
    checkedTodo(index)
  };
  console.log(state.todo)
  return (
    <>
      <div className="main-div">
        <div className="input-div">
          <input
            type="text"
            className="todo-input"
            value={text}
            placeholder='Enter Text Here'
            onChange={(e) => setText(e.target.value)}
          />
          <Button variant="contained" onClick={addTodoBtn} sx={{marginLeft:"1vw"}}>
            {btnText}
          </Button>
        </div>
        <div className="todo-div">
          {state.todo.map((i, index) => {
            return (
              <div key={i.id} className="show-todo">
                <div>
                  <input type="checkbox" checked={state.todo.checked} onClick={(e)=>checkedTodoItem(e,index)} />
                </div>
                <div className="todo_text">{i.text}</div>
                <div>
                  <Button
                    onClick={() => {
                      editTodoBtn(index, i.text);
                    }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </div>
                <div>
                  <Button onClick={() => deleteTodoBtn(i.id)}  variant="outlined">Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default connect(MapStateToProps, MapDispatchToProps)(Todo);
