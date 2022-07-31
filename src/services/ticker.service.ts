import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { 
  map,
  Observable, 
} from 'rxjs';
import { environment } from 'src/environments/environment';

import { 
  VALID,  
  Quote,
  Meta
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
      return VALID.filter((val) => val.symbol == symbol).pop()?.name

    }
    return null
  }

  public getLatestData(ticker: string): Observable<Quote>{
    let url = this.getLatestUrl(ticker)

    return this.http.get<Quote>(url).pipe(
      map((data: any)=>{
        return {
          open: data['Global Quote']['02. open'],
          high: data['Global Quote']['03. high'],
          low: data['Global Quote']['04. low'],
          price: data['Global Quote']['05. price'],
          volume: data['Global Quote']['06. volume'],
          previous: data['Global Quote']['08. previous close'],
          change: data['Global Quote']['09. change'],
          percent: data['Global Quote']['10. change percent']
        }
      })
    )
  }

  public getLatestMeta(ticker: string): Observable<Meta>{
    let url = this.getMetaUrl(ticker)

    return this.http.get<Meta>(url).pipe(
      map((data:any)=>{
        return {
          market_cap: data['MarketCapitalization']
        }
      })
    )
  }

  public getLatestUrl(ticker: string): string {
    return `https://www.alphavantage.co/query?apikey=${environment.apiKey}&function=GLOBAL_QUOTE&symbol=${ticker}`
  }

  public getMetaUrl(ticker: string): string{
    return `https://www.alphavantage.co/query?apikey=${environment.apiKey}&function=OVERVIEW&symbol=${ticker}`
  }
}
