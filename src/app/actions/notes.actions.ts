import { v4 } from 'node-uuid';
import { 
  ADD_NOTES, 
  UPDATE_NOTES, 
  REMOVE_NOTES, 
  MOVE_TO_NOTEBOOK,
  GET_NOTES,
  REPLACE_NOTEBOOKS_FROM_NOTES
} from './../constants/notes.constants';
import database from './../firebase/firebase.service';

const notes = database.ref('notes');

// export const addNotes = ({ name, description, link, notebookId  }) => {
//   const id = v4();
//   return ({
//     type: ADD_NOTES,
//     payload: {
//       id,
//       name,
//       description,
//       link,
//       notebookId
//     }
//   });
// };

export const addNotes = (note) => ({
  type: ADD_NOTES,
  payload: new Promise((resolve, reject) => {
    notes.push(note)
      .then((res) => {
        resolve(Object.assign({}, note, { id: res.key }))
      })
      .catch((error) => reject(error));
  })
});

// export const updateNotes = ({ id, name, description, link, notebookId }) => (
//   {
//     type: UPDATE_NOTES,
//     payload: {
//       id,
//       name,
//       description,
//       link,
//       notebookId
//     }
//   }
// );

export const updateNotes = ({ id, name, description, link, notebookId }) => ({
  type: UPDATE_NOTES,
  payload: new Promise((resolve, reject) => {
    notes.child(id).set({
      name,
      description,
      link,
      notebookId
    })
      .then((res) => resolve({ id, name, description, link, notebookId }))
      .catch((error) => reject(error));
  })
});

// export const removeNotes = (id) => (
//   {
//     type: REMOVE_NOTES,
//     payload: id
//   }
// );

export const removeNotes = (id) => ({
  type: REMOVE_NOTES,
  payload: new Promise((resolve, reject) => {
    notes.child(id).remove()
      .then(() => resolve(id))
      .catch((error) => reject(error));
  })
});

// export const moveToNotebook = ({ id, notebookId}) => (
//   {
//     type: MOVE_TO_NOTEBOOK,
//     payload: {
//       id,
//       notebookId
//     }
//   }
// );

export const moveToNotebook = ({ id, notebookId}) => ({
  type: MOVE_TO_NOTEBOOK,
  payload: new Promise((resolve, reject) => {
    notes.child(id).update({ notebookId })
      .then(() => resolve({ id, notebookId }))
      .catch((error) => reject(error));
  })
});

export const getNotes = () => ({
  type: GET_NOTES,
  payload: new Promise((resolve, reject) => {
    notes.once('value')
      .then((snapshot) => resolve(snapshot.val()))
      .catch((error) => reject(error));
  })
});

export const replaceNotebookFromNotes = (notebookId) => ({
  type: REPLACE_NOTEBOOKS_FROM_NOTES,
  payload: new Promise((resolve, reject) => {
    notes.once('value')
      .then((snapshot) => {
        let notesData = snapshot.val();
        let updatedNotes = {};
        Object.keys(notesData).map((key) => {
          updatedNotes[key] = notesData[key];
          if (notesData[key].notebookId === notebookId) {
            updatedNotes[key].notebookId = 'firstNotebook';
          }
        });
        notes.update(updatedNotes)
          .then(() => resolve(notebookId))
          .catch((error) => reject(error));
      })
      .catch((error) => reject(error));
  })
});