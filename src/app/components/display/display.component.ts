import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesData, SeriesPoint } from 'src/config';
import { TickerService } from 'src/services/ticker.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public loading: boolean = false;
  public ticker: string | null | undefined;
  public tickerName: string | null | undefined;

  public previousPoint?: SeriesPoint;
  public latestPoint?: SeriesPoint;

  constructor(
    private route: ActivatedRoute, 
    private tickers: TickerService
  ) { 
    this.ticker = this.route.snapshot.paramMap.get('ticker')
    this.tickerName = this.tickers.getTickerName(this.ticker)
  }

  ngOnInit(): void {
    if(this.ticker){
      this.loading = true;
      this.tickers.getLatestData(this.ticker).subscribe((data: SeriesData)=>{
        this.previousPoint = data.previous;
        this.latestPoint = data.latest;
        console.log(this.latestPoint)
        console.log(this.previousPoint)
        this.loading = false;
      })
    }
  }

  public getLatestPrice(): number | null | undefined{
    return this.latestPoint?.data["4. close"]
  }

  public getLatestPercentChange(){
    return (this.latestPoint?.data["4. close"] - this.previousPoint?.data["4. close"])/this.previousPoint?.data["4. close"]
  }

  public getLatestOpen(){
    return this.latestPoint?.data["1. open"]
  }

  public getLatestHigh(){
    return this.latestPoint?.data["2. high"]
  }

  public getLatestLow(){
    return this.latestPoint?.data["3. low"]
  }

  public getLatestVolume(){
    return this.latestPoint?.data["5. volume"]
  }

}
