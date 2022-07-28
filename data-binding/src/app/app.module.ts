import { MyFormModule } from './my-form/my-form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingStyleComponent } from './data-binding-style/data-binding-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DataBindingStyleComponent,
    EventBindingComponent,
    TwoWayComponent,
    InputOutputComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
