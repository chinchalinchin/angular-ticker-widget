import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { TickerService } from 'src/services/ticker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('trigger', { read: MatAutocompleteTrigger})
  public autoComplete!: MatAutocompleteTrigger
  public validTickers: string[];
  public searchControl: FormControl;

  constructor(
    private tickers: TickerService,
    private router: Router
  ){
    this.validTickers = this.tickers.getValidTickers()
    this.searchControl = new FormControl('', 
      [
        Validators.required,
        (control: AbstractControl) => {
          console.log(control.value)
          return this.validTickers.indexOf(control.value) == -1 ? { 'forbidden': true } : null
        }
      ]);
  }

  public search(): void{
    this.autoComplete.closePanel()
    this.router.navigateByUrl(`search/${this.searchControl.value}`)
  }

  public clear(): void{
    this.router.navigateByUrl('')
  }
}
