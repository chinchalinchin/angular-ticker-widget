import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { 
  map,
  Observable, 
  of 
} from 'rxjs';
import { environment } from 'src/environments/environment';

import { 
  VALID,  
  INTERVAL,
  SeriesData
} from '../config'

@Injectable({
  providedIn: 'root'
})
export class TickerService {


  constructor(
    private http: HttpClient
  ) { }

  public getValidTickers(): string[]{
    return VALID.map((val) => val.symbol)
  }

  public getTickerName(symbol: string | null | undefined): string | null | undefined{
    if(symbol){
      return VALID.filter((val) => val.symbol == symbol).pop()?.symbol

    }
    return null
  }

  public getLatestData(ticker: string): Observable<any>{
    let url = this.getLatestUrl(ticker)

    return this.http.get<SeriesData>(url).pipe(
      map((data: any)=>{
        let series = data['Time Series (1min)']
        return {
          latest: {
            'time': Object.keys(series)[0],
            'data': series[Object.keys(series)[0]],
          }, 
          previous: {
            'time': Object.keys(series)[1],
            'data': series[Object.keys(series)[1]]
          }
        }
      })
    )
  }

  public getLatestUrl(ticker: string): string {
    return `https://www.alphavantage.co/query?apikey=${environment.apiKey}&function=TIME_SERIES_INTRADAY&interval=${INTERVAL}&outputsize=compact&symbol=${ticker}`
  }
}
