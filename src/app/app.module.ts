import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TickTockModule } from 'ampath-poc/dist';
import { TickTockService } from 'poc-shared/dist';

const routes: Routes = [];


/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    TickTockModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ TickTockService ],
  exports: [
  ]
})
export class AppModule {

}
