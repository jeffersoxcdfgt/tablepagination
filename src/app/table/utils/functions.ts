import { Items } from "../model/items";
import { filter, find , map, mergeMap} from "rxjs/operators";
import { of } from "rxjs";
import { Params } from "@angular/router";

 const ONLYNUMBERS =  filter((val:number) => val.toString().match(/^[0-9]+$/) !==null)
 const CLEANOBJECT =  filter((val:Items) => !!val)
 const CLEANNUMBER =  filter((val:number) => !!val)
 const MAPOBJECT =  map((val) => val as Items)
 const MAPTONUMBER =  map((params:Params|any) => params['page'] as number)
 const SETLOADING = map((list:Items) => !list.success as boolean)
 export const LIMITTABLE = 5

 export const CLEAROBJ = mergeMap((stream) => of(stream).pipe(MAPOBJECT,CLEANOBJECT))
 export const LOADING = mergeMap((stream) => of(stream).pipe(MAPOBJECT,CLEANOBJECT,SETLOADING))
 export const CLEANPARAMS = mergeMap((stream) =>of(stream).pipe(MAPTONUMBER,ONLYNUMBERS,CLEANNUMBER))



 