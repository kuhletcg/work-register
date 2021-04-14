import { ADD_FORM, DELETE_FORM, EDIT_FORM } from "../actionTypes/Form";

export const addForm = (form) => {
  return {
    type: ADD_FORM,
    payload: form,
  };
};

export const deleteForm = (key) => ({
  type: DELETE_FORM,
  payload: key,
});

export const editForm = (key) => ({
  type: EDIT_FORM,
  payload: key,
});
