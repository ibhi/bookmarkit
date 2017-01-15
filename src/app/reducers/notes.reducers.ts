import { combineReducers } from 'redux';
import { ADD_NOTES, EDIT_NOTES, REMOVE_NOTES, MOVE_TO_NOTEBOOK } from './../constants/notes.constants';

const addNotesEntry = (state, note) => (
  Object.assign(
    {},
    state,
    {
      [note.id]: {
        id: note.id,
        name: note.name,
        description: note.description,
        link: note.link,
        notebookId: note.notebookId
      }
    }
  )
);

const notesById = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTES:
      return addNotesEntry(state, action.payload);
    default:
      return state;
  }
}

const allNotes = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTES:
      return state.concat(action.payload.id);
    default:
      return state;
  }
}

const notes = combineReducers({
  byId: notesById,
  allIds: allNotes
});

export default notes;
