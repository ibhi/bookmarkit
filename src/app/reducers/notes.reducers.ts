import { combineReducers } from 'redux-immutable';
import { List, Map, Seq, fromJS } from 'immutable';
import { ADD_NOTES_FULFILLED, 
  UPDATE_NOTES_FULFILLED, 
  REMOVE_NOTES_FULFILLED, 
  MOVE_TO_NOTEBOOK_FULFILLED, 
  GET_NOTES_FULFILLED, 
  REPLACE_NOTEBOOKS_FROM_NOTES_FULFILLED 
} from './../constants/notes.constants';
import { omit } from 'lodash';

const addNotesEntry = (state, note) => state.set(note.id, Map(note));

const removeNotesEntry = (state, id) => state.delete(id);

const moveToNotebookEntry = (state, { id , notebookId}) => state.setIn([id, 'notebookId'], notebookId);

const getNotes = (state, notes) => fromJS(notes);

const replaceNotebookFromNotes = (state, notebookId) => {
  return state.map((note: any, key) => {
    if (note.get('notebookId') === notebookId) {
      return note.set('notebookId', 'firstNotebook');
    } else {
      return note;
    }
  });
};

const notesById = (state = Map({}), action) => {
  switch (action.type) {
    case ADD_NOTES_FULFILLED:
    case UPDATE_NOTES_FULFILLED:
      return addNotesEntry(state, action.payload);
    case REMOVE_NOTES_FULFILLED:
      return removeNotesEntry(state, action.payload);
    case MOVE_TO_NOTEBOOK_FULFILLED:
      return moveToNotebookEntry(state, action.payload);
    case GET_NOTES_FULFILLED:
      return getNotes(state, action.payload);
    case REPLACE_NOTEBOOKS_FROM_NOTES_FULFILLED:
      return replaceNotebookFromNotes(state, action.payload);
    default:
      return state;
  }
}

const addToAllNotes = (state, notes) => state.push(...Object.keys(notes));

const allNotes = (state = List([]), action) => {
  switch (action.type) {
    case ADD_NOTES_FULFILLED:
      return state.push(action.payload.id);
    case REMOVE_NOTES_FULFILLED:
      return state.filter(id => id !== action.payload);
    case GET_NOTES_FULFILLED:
      return addToAllNotes(state, action.payload);
    // case UPDATE_NOTES_FULFILLED:
    // case MOVE_TO_NOTEBOOK_FULFILLED:
    default:
      return state;
  }
}

const notes = combineReducers({
  byId: notesById,
  allIds: allNotes
});

export default notes;
