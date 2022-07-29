import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TickerService } from 'src/services/ticker.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public ticker: string | null | undefined;
  public tickerName: string | null | undefined;

  constructor(
    private route: ActivatedRoute, 
    private tickers: TickerService
  ) { 
    this.ticker = this.route.snapshot.paramMap.get('ticker')
    this.tickerName = this.tickers.getTickerName(this.ticker)
  }

  ngOnInit(): void {
  }

}
