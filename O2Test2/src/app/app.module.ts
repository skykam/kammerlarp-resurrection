import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxCheckBoxComponent } from '../scripts/jqwidgets-ts/angular_jqxcheckbox';
import { jqxExpanderComponent } from '../scripts/jqwidgets-ts/angular_jqxexpander';
import { jqxGaugeComponent } from '../scripts/jqwidgets-ts/angular_jqxgauge';
import { jqxRadioButtonComponent } from '../scripts/jqwidgets-ts/angular_jqxradiobutton';

import { O2guageComponent } from './o2guage/o2guage.component';
import { O2WidgetComponent } from './o2-widget/o2-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    O2guageComponent,
    O2WidgetComponent,
    jqxCheckBoxComponent,
    jqxExpanderComponent,
    jqxGaugeComponent,
    jqxRadioButtonComponent
  ],
  imports: [
     BrowserModule,
     FormsModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
