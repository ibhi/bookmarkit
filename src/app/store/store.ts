import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';
// import createLogger from 'redux-logger';
import notes from './../reducers/notes.reducers';
import notebooks from './../reducers/notebooks.reducers';

let initialState = Map({
  notes: Map({
    byId: Map({
      'note1': Map({
        id: 'note1',
        name: 'Note 1',
        description: 'This is description about note 1',
        link: 'http://google.co.in',
        notebookId: 'notebook1'
      }),
      'note2': Map({
        id: 'note2',
        name: 'Note 2',
        description: 'This is description about note 2',
        link: 'http://google.co.in',
        notebookId: 'notebook2'
      })
    }),
    allIds: List(['note1', 'note2'])
  }),
  notebooks: Map({
    byId: Map({
      'notebook1': Map({
        id: 'notebook1',
        name: 'Notebook 1'
      }),
      'notebook2': Map({
        id: 'notebook2',
        name: 'Notebook 2'
      })
    }),
    allIds: List(['notebook1', 'notebook2'])
  })
});

const rootReducer = combineReducers({
  notes,
  notebooks
});

const store = createStore(rootReducer, initialState);

export default store;
