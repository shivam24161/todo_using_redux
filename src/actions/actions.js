export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const EDITTODO = "EDITTODO";
export const CHECKEDTODO = "CHECKEDTODO";
export const Add = (id, text) => {
  return {
    type: ADDTODO,
    payload: { id, text },
  };
};
export const Delete = (id) => {
  return {
    type: DELETETODO,
    payload: id
  };
};

export const Edit = (index, id, text) => {
  return {
    type: EDITTODO,
    payload: { index, id, text },
  };
};

export const Check = (index) => {
  return {
    type: CHECKEDTODO,
    payload:{index}
  };
};
