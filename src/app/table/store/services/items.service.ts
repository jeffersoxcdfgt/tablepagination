

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Items, ParamsResult, SetResults } from '../../model/items';
import { TraceService } from '../../../utils/traceService';


@Injectable()
export class ItemsService {
  protected URL =environment.urlItems

  constructor(private http: HttpClient,private traceService: TraceService ){ }
  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(params:ParamsResult): Observable<Items>{

    const headers= new HttpHeaders()
    .set('x-ultracart-simple-key', environment.xultracartsimplekey)
    .set('x-ultracart-api-version', environment.xultracartapiversion);


    return this.http.get<Items>(`${this.URL}/api/items?_limit=${params.metadata._limit}&offset=${params.metadata.offset}`,{headers} ).pipe(
        catchError(this.traceService.handleError<Items>('findAll'))
    );
  }
}