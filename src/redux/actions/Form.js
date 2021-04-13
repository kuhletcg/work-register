import { ADD_FORM, DELETE_FORM, EDIT_FORM } from "../actionTypes/Form";

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

export const editForm = (key) => ({
  type: EDIT_FORM,
  payload: key,
});
// import { useState } from "react";
// import "./App.css";
// import { useSelector, useDispatch } from "react-redux";
// import { addForm, deleteForm } from "./redux/actions/Form";
// import { ADD_FORM, FORM_LIST, DELETE_FORM } from "../actionTypes/Form";

// export const addForm = (Form) => {
//   return {
//     type: ADD_FORM,
//     payload: Form,
//   };
// };

// export const deleteForm = (key) => ({
//   type: DELETE_FORM,
//   payload: key,
// });

// export const FormList = (Form) => ({
//   type: FORM_LIST,
//   payload: Form,
// });
