import { v4 } from 'node-uuid';
import { combineReducers } from 'redux';
import omit from 'lodash-es/omit';
import { ADD_NOTEBOOK, UPDATE_NOTEBOOK, REMOVE_NOTEBOOK } from './../constants/notebooks.constants';
import { addNotebook, updateNotebook, removeNotebook } from './../actions/notebooks.actions';

const addNotebooksEntry = (state, { id, name }) => {
  return (
    Object.assign(
      {},
      state,
      {
        [id]: {
          id,
          name
        }
      }
    )
  );
};

const removeNotebookEntry = (state, notebookId) => omit(state, notebookId);

const notebooksById = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTEBOOK:
    case UPDATE_NOTEBOOK:
      return addNotebooksEntry(state, action.payload);
    case REMOVE_NOTEBOOK:
      return removeNotebookEntry(state, action.payload);
    default: 
      return state;
  }
}

const allNotebooks = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTEBOOK:
      return state.concat(action.payload.id);
    case UPDATE_NOTEBOOK:
      return state;
    case REMOVE_NOTEBOOK:
      return state.filter(id => id !== action.payload);
    default:
      return state;
  }
}

const notebooks = combineReducers({
  byId: notebooksById,
  allIds: allNotebooks
})

export default notebooks;
