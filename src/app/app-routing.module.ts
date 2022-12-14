import { NgModule } from '@angular/core';
import { 
  RouterModule, 
  Routes 
} from '@angular/router';
import { DisplayComponent } from './components/display/display.component';

const routes: Routes = [
  { path: 'search/:ticker', component:  DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
