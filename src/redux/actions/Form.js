import { NUMBER, ADD_FORM, DELETE_FORM } from "../actionTypes/Form";

export const addForm = (Form) => {
  return {
    type: ADD_FORM,
    payload: Form,
  };
};

export const deleteForm = (key) => ({
  type: DELETE_FORM,
  payload: key,
});

export const ADD_NUMBER = (number) => ({
  type: ADD_NUMBER,
  payload: number,
});
