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
    store.subscribe(() => {
      let state: any = store.getState()
      console.log('Changed state ', state.toJS())
    });
    let state:any = store.getState();
    console.log('Initial state before add ', state.toJS());
    // store.dispatch(addNotes(
    //   {
    //     name: 'Note 3',
    //     description: 'This is description about note 3',
    //     link: 'http://google.co.in',
    //     notebookId: 'notebook1'
    //   }
    // ));
    // state = store.getState();
    // console.log('Initial state before edit notes ', state.toJS());
    // store.dispatch(updateNotes(
    //   {
    //     id: 'note2',
    //     name: 'Note 2',
    //     description: 'This is updated description about note 2',
    //     link: 'http://google.co.in',
    //     notebookId: 'notebook1'
    //   }
    // ));

    // state = store.getState();
    // console.log('Initial state before remove notes ', state.toJS());
    // store.dispatch(removeNotes('note2'));

    // state = store.getState();
    // console.log('Initial state before move notebook ', state.toJS());
    // store.dispatch(moveToNotebook(
    //   {
    //     id: 'note1',
    //     notebookId: 'notebook2'
    //   }
    // ));

    store.dispatch(addNotebook('Notebook 3'));
    state = store.getState();
    console.log('Initial state before update notebook ', state.toJS());
    store.dispatch(updateNotebook({
      id: 'notebook1',
      name: 'Updated Notebook 1'
    }));
    state = store.getState();
    console.log('Initial state before remove notebook ', state.toJS());
    store.dispatch(removeNotebook('notebook2'));
  }
}
