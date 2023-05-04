import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ItemsService } from '../services/items.service';
import { ItemsActionTypes } from '../actions/items.action';
import { Items, ParamsResult } from '../../model/items';

@Injectable()
export class ItemsEffects {

  public selectItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemsActionTypes.GET_ITEMS),
    mergeMap((params:ParamsResult) => this.itemsService.findAll({...params})
      .pipe(
        map((data:Items) => ({ 
            type: ItemsActionTypes.GET_ITEMS_SUCCESS, 
            items: data 
        }))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {}
}