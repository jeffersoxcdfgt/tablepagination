import { createFeature, createReducer , on } from '@ngrx/store';
import { Items } from '../../model/items';
import * as ItemsApiActions from '../actions/items.action';

export interface State {
  items: Items | null;
  loading: boolean;
}

const initialState: State = {
  items: null,
  loading: false,
};

export const itemsFeature = createFeature({
  name: 'items',
  reducer: createReducer(
    initialState,
    on(ItemsApiActions.itemsGetAll, (state) => ({
        ...state,
        loading: true,
    })),
    on(ItemsApiActions.itemsGetAllSuccess, (state, { items }) => ({
        ...state,
        items,
        loading: false,
    }))
  ),
});

export const {
  name, // feature name
  reducer, // feature reducer
  selectItemsState, // feature selector
  selectItems, // selector for `items` property
  selectLoading, // selector for `loading` property
} = itemsFeature;


// select the array of Items
export const selectAllItems = selectItems;