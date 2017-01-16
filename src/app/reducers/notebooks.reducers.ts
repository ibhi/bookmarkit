import { v4 } from 'node-uuid';
import { combineReducers } from 'redux-immutable';
import { omit } from 'lodash';
import { List, Map } from 'immutable';
import { ADD_NOTEBOOK, UPDATE_NOTEBOOK, REMOVE_NOTEBOOK } from './../constants/notebooks.constants';
import { addNotebook, updateNotebook, removeNotebook } from './../actions/notebooks.actions';

const addNotebooksEntry = (state, { id, name }) => state.set(id, Map({ id, name }));

const removeNotebookEntry = (state, notebookId) => state.delete(notebookId);

const notebooksById = (state = Map({}), action) => {
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

const allNotebooks = (state = List([]), action) => {
  switch (action.type) {
    case ADD_NOTEBOOK:
      return state.push(action.payload.id);
    case REMOVE_NOTEBOOK:
      return state.filter(id => id !== action.payload);
    case UPDATE_NOTEBOOK:
    default:
      return state;
  }
}

const notebooks = combineReducers({
  byId: notebooksById,
  allIds: allNotebooks
})

export default notebooks;
