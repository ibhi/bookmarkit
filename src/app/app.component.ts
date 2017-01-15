import { Component, OnInit } from '@angular/core';
import store from './store/store';
import { addNotes, updateNotes, removeNotes, moveToNotebook } from './actions/notes.actions';
import { addNotebook, updateNotebook, removeNotebook } from './actions/notebooks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    store.subscribe(() => console.log('Changed state ', store.getState()));
    
    console.log('Initial state before add ', store.getState());
    // store.dispatch(addNotes(
    //   {
    //     name: 'Note 3',
    //     description: 'This is description about note 3',
    //     link: 'http://google.co.in',
    //     notebookId: 'notebook1'
    //   }
    // ));

    // console.log('Initial state before edit notes ', store.getState());
    // store.dispatch(updateNotes(
    //   {
    //     id: 'note2',
    //     name: 'Note 2',
    //     description: 'This is updated description about note 2',
    //     link: 'http://google.co.in',
    //     notebookId: 'notebook1'
    //   }
    // ));

    // // console.log('Initial state before remove notes ', store.getState());
    // // store.dispatch(removeNotes('note2'));

    // console.log('Initial state before move notebook ', store.getState());
    // store.dispatch(moveToNotebook(
    //   {
    //     id: 'note2',
    //     notebookId: 'notebook1'
    //   }
    // ));

    store.dispatch(addNotebook('Notebook 3'));
    console.log('Initial state before update notebook ', store.getState());
    store.dispatch(updateNotebook({
      id: 'notebook1',
      name: 'Updated Notebook 1'
    }));
    console.log('Initial state before remove notebook ', store.getState());
    store.dispatch(removeNotebook('notebook2'));
    
  }
}
