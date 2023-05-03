import { NgModule   } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

// components
import { TableMainComponent } from './table-main.component';
import { TableByPagesComponent } from './table-by-pages/table-by-pages.component';


const tablemainRoutes: Routes  =  [{
  path: '',
  component : TableMainComponent,
  children: [
    { path: 'table-list' , component:  TableByPagesComponent},
  ]
}
] as Routes;

@NgModule({
  imports: [
    RouterModule.forChild(tablemainRoutes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class TableMainRoutingModule {
}

export const tablemainRoutedComponents = [
    TableMainComponent,
    TableByPagesComponent
];