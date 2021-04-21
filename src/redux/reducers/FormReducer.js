import {
  ADD_FORM,
  DELETE_FORM,
  EDIT_FORM,
  ADD_FORMLIST,
  COMPLETE_FORM,
} from "../actionTypes/Form";

const initialState = {
  FormList: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      console.log("name", action.payload);
      return {
        ...state,
        FormList: [
          ...state.FormList,
          {
            key: Math.random(),
            name: action.payload,
          },
        ],
      };
    case DELETE_FORM:
      return {
        ...state,
        FormList: action.payload,
      };
    case EDIT_FORM:
      return {
        ...state,
        FormList: action.payload,
      };
    case ADD_FORMLIST:
      return {
        ...state,
        FormList: action.payload,
      };
    case COMPLETE_FORM:
      return {
        ...state,
        FormList: action.payload,
      };
    default:
      return state;
  }
};

export default FormReducer;
