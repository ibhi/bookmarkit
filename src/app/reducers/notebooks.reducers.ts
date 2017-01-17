import { v4 } from 'node-uuid';
import { combineReducers } from 'redux-immutable';
import { omit } from 'lodash';
import { List, Map, fromJS } from 'immutable';
import { ADD_NOTEBOOK_FULFILLED, UPDATE_NOTEBOOK_FULFILLED, REMOVE_NOTEBOOK_FULFILLED, GET_NOTEBOOKS_FULFILLED } from './../constants/notebooks.constants';
import { addNotebook, updateNotebook, removeNotebook } from './../actions/notebooks.actions';

const addNotebooksEntry = (state, { id, name }) => state.set(id, Map({ id, name }));

const removeNotebookEntry = (state, notebookId) => state.delete(notebookId);

const getNotebooks = (state, notebooks) => fromJS(notebooks);

const notebooksById = (state = Map({}), action) => {
  switch (action.type) {
    case ADD_NOTEBOOK_FULFILLED:
    case UPDATE_NOTEBOOK_FULFILLED:
      return addNotebooksEntry(state, action.payload);
    case REMOVE_NOTEBOOK_FULFILLED:
      return removeNotebookEntry(state, action.payload);
    case GET_NOTEBOOKS_FULFILLED:
      return getNotebooks(state, action.payload);
    default: 
      return state;
  }
}

const getAllNotes = (state, notebooks) => state.push(...Object.keys(notebooks));

const allNotebooks = (state = List([]), action) => {
  switch (action.type) {
    case ADD_NOTEBOOK_FULFILLED:
      return state.push(action.payload.id);
    case REMOVE_NOTEBOOK_FULFILLED:
      return state.filter(id => id !== action.payload);
    case GET_NOTEBOOKS_FULFILLED:
      return getAllNotes(state, action.payload);
    // case UPDATE_NOTEBOOK_FULFILLED:
    default:
      return state;
  }
}

const notebooks = combineReducers({
  byId: notebooksById,
  allIds: allNotebooks
});

export default notebooks;
