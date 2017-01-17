// import { v4 } from 'node-uuid';
import { ADD_NOTEBOOK, UPDATE_NOTEBOOK, REMOVE_NOTEBOOK, GET_NOTEBOOKS } from './../constants/notebooks.constants';
import { replaceNotebookFromNotes } from './notes.actions';
import database from './../firebase/firebase.service';

// export const addNotebook = (name) => {
//   const id = v4();
//   return ({
//     type: ADD_NOTEBOOK,
//     payload: {
//       id,
//       name
//     }
//   });
// }
const notebooks = database.ref('notebooks');

export const addNotebook = (name) => ({
  type: ADD_NOTEBOOK,
  payload: new Promise((resolve, reject) => {
    notebooks.push({ name })
      .then((res) => resolve(Object.assign({}, { name }, { id: res.key })))
      .catch((error) => reject(error));
  })
});

// export const updateNotebook = (notebook) => (
//   {
//     type: UPDATE_NOTEBOOK,
//     payload: notebook
//   }
// );

export const updateNotebook = ({ id, name }) => ({
  type: UPDATE_NOTEBOOK,
  payload: new Promise((resolve, reject) => {
    notebooks.child(id).update({ name })
      .then(() => resolve({ id, name }))
      .catch((error) => reject(error));
  })
});

// export const removeNotebook = (notebookId) => (
//   {
//     type: REMOVE_NOTEBOOK,
//     payload: notebookId
//   }
// );

// export const removeNotebook = (notebookId) => ({
//   type: REMOVE_NOTEBOOK,
//   payload: new Promise((resolve, reject) => {
//     notebooks.child(notebookId).remove()
//       .then(() => resolve(notebookId))
//       .catch((error) => reject(error));
//   })
// });

export const removeNotebook = (notebookId) => {
  return (dispatch) => {
    return dispatch({
      type: REMOVE_NOTEBOOK,
      payload: new Promise((resolve, reject) => {
        notebooks.child(notebookId).remove()
          .then(() => resolve(notebookId))
          .catch((error) => reject(error));
      })
    }).then(() => dispatch(replaceNotebookFromNotes(notebookId)));
  }
};

export const getNotebooks = () => ({
  type: GET_NOTEBOOKS,
  payload: new Promise((resolve, reject) => {
    notebooks.once('value')
      .then((snapshot) => resolve(snapshot.val()))
      .catch((error) => reject(error));
  })
})
