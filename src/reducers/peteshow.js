import { FILL_OUT_FORM } from 'actions/peteshow';

const initialState = {
  inputs: [],
};

export default (state = initialState, action) => {
  if (action.type === FILL_OUT_FORM) {
    return {
      ...state,
      inputs: action.inputs,
    };
  }

  return state;
};
