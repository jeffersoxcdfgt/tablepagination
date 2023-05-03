import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tablemainRoutedComponents , TableMainRoutingModule} from './table-routing.module';


@NgModule({
  imports: [
    TableMainRoutingModule,
    FormsModule,
    CommonModule,
  ],
  declarations: [
    tablemainRoutedComponents,
  ],
  providers: [

  ]
})
export class TableMainModule {}