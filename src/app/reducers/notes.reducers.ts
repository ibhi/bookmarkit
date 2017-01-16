import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';
import { ADD_NOTES, UPDATE_NOTES, REMOVE_NOTES, MOVE_TO_NOTEBOOK } from './../constants/notes.constants';
import { omit } from 'lodash';

const addNotesEntry = (state, note) => state.set(note.id, Map(note));

const removeNotesEntry = (state, id) => state.delete(id);

const moveToNotebookEntry = (state, { id , notebookId}) => state.setIn([id, 'notebookId'], notebookId);

const notesById = (state = Map({}), action) => {
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

const allNotes = (state = List([]), action) => {
  switch (action.type) {
    case ADD_NOTES:
      return state.push(action.payload.id);
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
