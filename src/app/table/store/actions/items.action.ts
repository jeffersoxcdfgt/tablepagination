import { createAction, props } from '@ngrx/store';
import { Items, SetResults } from '../../model/items';

export enum ItemsActionTypes {
  GET_ITEMS = '[All] Items',
  GET_ITEMS_SUCCESS = '[ALL] Items Success',
  GET_ITEMS_ERROR = '[All] Items Error'
}

// list items

export const itemsGetAll = createAction(ItemsActionTypes.GET_ITEMS,props<{metadata: SetResults}>());
export const itemsGetAllSuccess = createAction(ItemsActionTypes.GET_ITEMS_SUCCESS, props<{items: Items}>());
export const itemsGetAlllError = createAction(ItemsActionTypes.GET_ITEMS_ERROR, props<{err: Error}>());