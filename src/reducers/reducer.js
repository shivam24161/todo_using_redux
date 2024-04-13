import { ADDTODO, CHECKEDTODO, DELETETODO, EDITTODO } from "../actions/actions";
const initialState = {
  todo: [],
};
export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: action.payload.id, text: action.payload.text, checked: false },
        ],
      };
    case DELETETODO:
      let list = state.todo.filter((i) => i.id !== action.payload);
      return {
        ...state,
        todo: [...list],
      };
    case EDITTODO:
      const { index, id, text } = action.payload;
      // let temp = [...state.todo]
      // temp.splice(index,1,{id:id,text:text})
      state.todo.splice(index, 1, { id: id, text: text, checked: false });
      return state;
    case CHECKEDTODO:
        let temp=[...state.todo]
        if(!state.todo[action.payload.index].checked)
        {
            temp[action.payload.index].checked=true
        }
        else if(state.todo[action.payload.index].checked)
        {
            temp[action.payload.index].checked=false
        }   
        return{
            ...state,
            todo:temp
        }
      
    default:
      return state;
  }
};
