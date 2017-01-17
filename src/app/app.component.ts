import { Component, OnInit } from '@angular/core';
import store from './store/store';
import { getNotes, addNotes, updateNotes, removeNotes, moveToNotebook, replaceNotebookFromNotes } from './actions/notes.actions';
import { getNotebooks ,addNotebook, updateNotebook, removeNotebook } from './actions/notebooks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    store.subscribe(() => {
      let state: any = store.getState()
    });

    store.dispatch(getNotes());

    // setTimeout(() => {
    //   store.dispatch(addNotes(
    //     {
    //       name: 'Note 3',
    //       description: 'This is description about note 3',
    //       link: 'http://google.co.in',
    //       notebookId: 'notebook1'
    //     }
    //   ));
    // }, 5000);

    // setTimeout(() => {
    //   store.dispatch(updateNotes(
    //     {
    //       id: 'note2',
    //       name: 'Note 2',
    //       description: 'This is updated description about note 2',
    //       link: 'http://google.co.in',
    //       notebookId: 'notebook1'
    //     }
    //   ));
    // }, 5000);

    // setTimeout(() => {
    //   store.dispatch(removeNotes('note2'));
    // }, 5000);

    // setTimeout(() => {
    //   store.dispatch(moveToNotebook(
    //     {
    //       id: 'note1',
    //       notebookId: 'notebook2'
    //     }
    //   ));
    // });

    // setTimeout(() => {
    //   store.dispatch(replaceNotebookFromNotes('notebook2'));
    // }, 5000);

    store.dispatch(getNotebooks());

    // setTimeout(() => store.dispatch(addNotebook('Notebook 3')), 5000);

    // setTimeout(() => {
    //   store.dispatch(updateNotebook({
    //     id: 'notebook1',
    //     name: 'Updated Notebook 1'
    //   }));
    // }, 5000);

    setTimeout(() => store.dispatch(removeNotebook('notebook2')), 5000);
    
  }
}
