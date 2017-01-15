import { createStore, applyMiddleware, combineReducers } from 'redux';
// import createLogger from 'redux-logger';
import notes from './../reducers/notes.reducers';
import notebooks from './../reducers/notebooks.reducers';

let initialState = {
  notes: {
    byId: {
      'note1': {
        id: 'note1',
        name: 'Note 1',
        description: 'This is description about note 1',
        link: 'http://google.co.in',
        notebookId: 'notebook1'
      },
      'note2': {
        id: 'note2',
        name: 'Note 2',
        description: 'This is description about note 2',
        link: 'http://google.co.in',
        notebookId: 'notebook2'
      }
    },
    allIds: ['note1', 'note2']
  },
  notebooks: {
    byId: {
      'notebook1': {
        id: 'notebook1',
        name: 'Notebook 1'
      },
      'notebook2': {
        id: 'notebook2',
        name: 'Notebook 2'
      }
    },
    allIds: ['notebook1', 'notebook2']
  }
};

const rootReducer = combineReducers({
  notes,
  notebooks
});

const store = createStore(rootReducer, initialState);

export default store;
