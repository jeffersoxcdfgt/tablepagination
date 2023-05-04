import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetResults } from './model/items';
import { itemsGetAll } from './store/actions/items.action';
import { State } from './store/reducers/items.reducer'

const setresult = {
  metadata:{ 
    _limit : 5,
    offset : 5
  }
}

@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {

  
  constructor(private store :Store<State>){ }

  ngOnInit(): void {
    this.store.dispatch(itemsGetAll(setresult));     
  }

}
