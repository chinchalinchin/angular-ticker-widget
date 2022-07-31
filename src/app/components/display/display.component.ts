import { 
  Component, 
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, Quote } from 'src/config';
import { TickerService } from 'src/services/ticker.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  public loading: boolean = false;
  public ticker: string | null | undefined;
  public tickerName: string | null | undefined;

  public latestQuote?: Quote;
  public latestMarketCap?: number;
  public getTime?: Date;

  constructor(
    private route: ActivatedRoute, 
    private tickers: TickerService
  ) { 
    this.route.params.subscribe(
      params => {
          this.ticker = params['ticker'];
          this.tickerName = this.tickers.getTickerName(this.ticker)
          this.init()
      }
  );
  }

  public init(): void {
    if(this.ticker){
      this.loading = true;
      this.tickers.getLatestData(this.ticker).subscribe((data: Quote)=>{
        this.getTime = new Date();
        this.latestQuote = data;
        if(this.loading){ this.loading = false; }
      })
      this.tickers.getLatestMeta(this.ticker).subscribe((data:Meta)=>{
        this.latestMarketCap = data.market_cap;
        if(this.loading){ this.loading = false; }
      })
    }
  }

}
