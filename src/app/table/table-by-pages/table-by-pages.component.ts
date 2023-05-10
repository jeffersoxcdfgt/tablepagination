import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ItemsRender, ParamsResult } from '../model/items';
import { itemsGetAll } from '../store/actions/items.action';
import { selectAllItems, State } from '../store/reducers/items.reducer';
import { CLEANPARAMS, CLEAROBJ, LIMITTABLE, LOADING } from '../utils/functions';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { UnsubscribeComponent } from 'src/app/utils/unsubscribe.component';

@Component({
  selector: 'app-table-by-pages',
  templateUrl: './table-by-pages.component.html',
  styleUrls: ['./table-by-pages.component.scss']
})
export class TableByPagesComponent extends UnsubscribeComponent implements OnInit {

  data$: Observable<ItemsRender> = this.store.select(selectAllItems).pipe(CLEAROBJ);
  offsetold: number = 0;
  limit: number = LIMITTABLE;
  loading$: Observable<boolean> = of(true)

  constructor(private store: Store<State>,private route: ActivatedRoute ) {
    super();
   }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectAllItems).pipe(debounceTime(200), LOADING);

    this.route.queryParams.pipe(CLEANPARAMS,takeUntil(this.destroyed$)).subscribe((page:number) => {
      const pagecurr = (page ) * LIMITTABLE 
      const pagesKitPagination = this.buildPagination(pagecurr)
      this.setPage(pagesKitPagination)
      this.offsetold = pagecurr - this.limit;
    });

    /* if you want simulate delay time */
    /*setTimeout(()=>{
      this.loading$ = this.store.select(selectAllItems).pipe(debounceTime(200), LOADING);
    },5000)*/
  }

  nextPage(next_offset: number): void {
    const pagesKitNxt = this.buildPagination(next_offset)
    this.offsetold = next_offset - this.limit;
    this.setPage(pagesKitNxt)
  }

  previousPage(offsetold: number): void {
    const pagesKitPrv = this.buildPagination(offsetold)
    this.setPage(pagesKitPrv)
    this.offsetold = offsetold - this.limit;
  }

  setPage(pagesKit:ParamsResult):void{
    this.store.dispatch(itemsGetAll(pagesKit));
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
