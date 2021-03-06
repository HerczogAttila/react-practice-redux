import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {
  results: []
};

const deleteResults = (state, action) => {
  const updatedArray = state.results.filter((result, index) => result.id !== action.resultElementId);
  return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result * 2})});
    case actionTypes.DELETE_RESULT: return deleteResults(state, action);
  }

  return state;
};

export default reducer;
