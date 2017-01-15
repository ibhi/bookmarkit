import { v4 } from 'node-uuid';
import { ADD_NOTES, UPDATE_NOTES, REMOVE_NOTES, MOVE_TO_NOTEBOOK } from './../constants/notes.constants';

export const addNotes = ({ name, description, link, notebookId  }) => {
  const id = v4();
  return ({
    type: ADD_NOTES,
    payload: {
      id,
      name,
      description,
      link,
      notebookId
    }
  });
};

export const updateNotes = ({ id, name, description, link, notebookId }) => (
  {
    type: UPDATE_NOTES,
    payload: {
      id,
      name,
      description,
      link,
      notebookId
    }
  }
);

export const removeNotes = (id) => (
  {
    type: REMOVE_NOTES,
    payload: id
  }
);

export const moveToNotebook = ({ id, notebookId}) => (
  {
    type: MOVE_TO_NOTEBOOK,
    payload: {
      id,
      notebookId
    }
  }
);
