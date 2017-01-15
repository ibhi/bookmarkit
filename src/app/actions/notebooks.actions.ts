import { v4 } from 'node-uuid';
import { ADD_NOTEBOOK, UPDATE_NOTEBOOK, REMOVE_NOTEBOOK } from './../constants/notebooks.constants';

export const addNotebook = (name) => {
  const id = v4();
  return ({
    type: ADD_NOTEBOOK,
    payload: {
      id,
      name
    }
  });
}

export const updateNotebook = (notebook) => (
  {
    type: UPDATE_NOTEBOOK,
    payload: notebook
  }
);

export const removeNotebook = (notebookId) => (
  {
    type: REMOVE_NOTEBOOK,
    payload: notebookId
  }
);
