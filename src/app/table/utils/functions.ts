import { Items } from "../model/items";
import { filter, find , map, mergeMap} from "rxjs/operators";
import { of } from "rxjs";

 const CLEANOBJECT =  filter((val:Items) => !!val)
 const MAPOBJECT =  map((val) => val as Items)
 export const CLEAROBJ = mergeMap((stream) => of(stream).pipe(MAPOBJECT,CLEANOBJECT))