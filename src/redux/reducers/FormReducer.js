import { ADD_FORM, DELETE_FORM } from "../actionTypes/Form";

const initialState = {
  FormList: [],
};

const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FORM:
      return {
        ...state,
        FormList: [
          ...state.formList,
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
    default:
      return state;
  }
};

export default FormReducer;
