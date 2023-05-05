import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemsRender, ParamsResult } from '../model/items';
import { itemsGetAll } from '../store/actions/items.action';
import { selectAllItems, State } from '../store/reducers/items.reducer';

@Component({
  selector: 'app-table-by-pages',
  templateUrl: './table-by-pages.component.html',
  styleUrls: ['./table-by-pages.component.scss']
})
export class TableByPagesComponent {

  data$: Observable<ItemsRender> = this.store.select(selectAllItems);
  offsetold: number = 0;
  limit: number = 5;

  constructor(private store: Store<State>) { }

  nextPage(next_offset: number): void {
    const pagesKitNxt = this.buildPagination(next_offset)
    this.offsetold = next_offset - this.limit;
    this.store.dispatch(itemsGetAll(pagesKitNxt));
  }

  previousPage(offsetold: number): void {
    const pagesKitPrv = this.buildPagination(offsetold)
    this.store.dispatch(itemsGetAll(pagesKitPrv));
    this.offsetold = offsetold - this.limit;
  }

  buildPagination(page: number): ParamsResult {
    return {
      metadata: {
        _limit: this.limit,
        offset: page
      }
    }
  }

}
