import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, mergeMap, Observable, of } from 'rxjs';
import { ItemsRender, ParamsResult } from '../model/items';
import { itemsGetAll } from '../store/actions/items.action';
import { selectAllItems, State } from '../store/reducers/items.reducer';
import { CLEAROBJ, LIMITTABLE, LOADING } from '../utils/functions';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-table-by-pages',
  templateUrl: './table-by-pages.component.html',
  styleUrls: ['./table-by-pages.component.scss']
})
export class TableByPagesComponent implements OnInit {

  data$: Observable<ItemsRender> = this.store.select(selectAllItems).pipe(CLEAROBJ);
  offsetold: number = 0;
  limit: number = LIMITTABLE;
  loading$: Observable<boolean> = of(true)

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectAllItems).pipe(debounceTime(200), LOADING);

    /* if you want simulate delay time */
    /*setTimeout(()=>{
      this.loading$ = this.store.select(selectAllItems).pipe(debounceTime(200), LOADING);
    },5000)*/
  }

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
