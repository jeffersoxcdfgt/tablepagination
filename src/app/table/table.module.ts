import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { tablemainRoutedComponents , TableMainRoutingModule} from './table-routing.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { itemsFeature } from './store/reducers/items.reducer'
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './store/effects/items.effect';
import { TraceService } from '../utils/traceService';
import { ItemsService } from './store/services/items.service';
import { LoadingComponent } from '../loading/loading.component';


@NgModule({
  imports: [
    TableMainRoutingModule,
    FormsModule,
    CommonModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(itemsFeature),
    EffectsModule.forFeature([ ItemsEffects ])
  ],
  declarations: [
    tablemainRoutedComponents,
    LoadingComponent,
  ],
  providers: [
    TraceService,
    ItemsService

  ]
})
export class TableMainModule {}