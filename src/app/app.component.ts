import { Component, OnInit } from '@angular/core';
import store from './store/store';
import { addNotes } from './actions/notes.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit() {
    console.log('Initial state ', store.getState());
    store.dispatch(addNotes(
      {
        name: 'Note 3',
        description: 'This is description about note 3',
        link: 'http://google.co.in',
        notebookId: 'notebook1'
      }
    ));
    console.log('Final state', store.getState());
  }
}
