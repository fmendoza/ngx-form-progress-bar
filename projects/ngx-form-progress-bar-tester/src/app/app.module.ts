import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFormProgressBarComponentModule } from 'ngx-form-progress-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxFormProgressBarComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
