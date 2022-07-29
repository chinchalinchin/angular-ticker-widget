import { Injectable } from '@angular/core';
import { 
  Observable, 
  of 
} from 'rxjs';

import { VALID } from '../config'

@Injectable({
  providedIn: 'root'
})
export class TickerService {

  constructor() { }

  public getValidTickers(): string[]{
    return VALID.map((val) => val.symbol)
  }

  public getTickerName(symbol: string | null | undefined): string | null | undefined{
    if(symbol){
      return VALID.filter((val) => val.symbol == symbol).pop()?.symbol

    }
    return null
  }

  public getData(ticker: string): Observable<any>{
    return of()
  }
}
