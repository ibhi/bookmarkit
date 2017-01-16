import { combineReducers } from 'redux';
import { ADD_NOTES, UPDATE_NOTES, REMOVE_NOTES, MOVE_TO_NOTEBOOK } from './../constants/notes.constants';
import { omit } from 'lodash';

const addNotesEntry = (state, { id, name, description, link, notebookId }) => (
  Object.assign(
    {},
    state,
    {
      [id]: {
        id,
        name,
        description,
        link,
        notebookId
      }
    }
  )
);

const removeNotesEntry = (state, id) => omit(state, id);

const moveToNotebookEntry = (state, { id , notebookId}) => (
  Object.assign(
    {},
    state,
    { 
      [id]: Object.assign({}, state[id], { notebookId })
    }
  )
);

const notesById = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTES:
    case UPDATE_NOTES:
      return addNotesEntry(state, action.payload);
    case REMOVE_NOTES:
      return removeNotesEntry(state, action.payload);
    case MOVE_TO_NOTEBOOK:
      return moveToNotebookEntry(state, action.payload);
    default:
      return state;
  }
}

const allNotes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTES:
      return state.concat(action.payload.id);
    case REMOVE_NOTES:
      return state.filter(id => id !== action.payload);
    case UPDATE_NOTES:
    case MOVE_TO_NOTEBOOK:
      return state;
    default:
      return state;
  }
}

const notes = combineReducers({
  byId: notesById,
  allIds: allNotes
});

export default notes;
