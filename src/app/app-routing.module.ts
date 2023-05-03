import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';


const routes:Routes = [
  { path:'' , redirectTo:'/tablemain' , pathMatch:'full'},
  {
    path:'tablemain',
    loadChildren: () => import('./table/table.module').then(h => h.TableMainModule)
  },
];

@NgModule({
  imports:[RouterModule.forRoot(routes,{useHash:true})],
  exports:[RouterModule]
})
export class AppRoutingModule {

}
