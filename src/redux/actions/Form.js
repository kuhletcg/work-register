import {
  ADD_FORM,
  DELETE_FORM,
  EDIT_FORM,
  COMPLETE_FORM,
} from "../actionTypes/Form";

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

export const editForm = (Form) => ({
  type: EDIT_FORM,
  payload: Form,
});

export const completeForm = (Form) => ({
  type: COMPLETE_FORM,
  payload: Form,
});
