import { Add,Delete,Edit,Check} from "./actions/actions"
export const MapStateToProps=(state)=>{
    return{
        state
    }
}
export const MapDispatchToProps=(dispatch)=>{
    return{
        addTodo:(id,text)=>dispatch(Add(id,text)),
        deleteTodo:(id)=>dispatch(Delete(id)),
        editTodo:(index,id,text)=>dispatch(Edit(index,id,text)),
        checkedTodo:(index)=>dispatch(Check(index))
    }
}