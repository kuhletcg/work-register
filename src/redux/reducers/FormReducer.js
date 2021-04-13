import { ADD_FORM, DELETE_FORM, EDIT_FORM } from "../actionTypes/Form";

const initialState = {
  FormList: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        FormList: [
          ...state.Form.FormList,
          {
            key: Math.random(),
            name: action.payload,
            surname: action.payload,
            work: action.payload,
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
    default:
      return state;
  }
};

export default FormReducer;
