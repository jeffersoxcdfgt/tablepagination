import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Items, ItemsRender } from '../model/items';
import { selectAllItems, State } from '../store/reducers/items.reducer';
import { CLEAROBJ } from '../utils/functions';

@Component({
  selector: 'app-table-by-pages',
  templateUrl: './table-by-pages.component.html',
  styleUrls: ['./table-by-pages.component.scss']
})
export class TableByPagesComponent {

  items$:Observable<ItemsRender> =this.store.select(selectAllItems)
  constructor(private store :Store<State>){ }

}

/*
{
  "merchant_item_oid": 6366898,
  "merchant_id": "webco",
  "merchant_item_id": "AnkleHighBoots-02",
  "description": "Ankle High Boots",
  "description_translated_text_instance_oid": 48896707,
  "parent_category_id": 303129,
  "parent_category_path": "/elements sample items/",
  "last_modified_dts": "2023-05-03T15:36:00-04:00",
  "creation_dts": "2023-05-03T15:36:00-04:00"
}

*/
