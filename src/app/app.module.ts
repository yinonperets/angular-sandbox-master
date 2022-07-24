import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { StringInterpolationComponent } from './components/string-interpolation/string-interpolation.component';
import { BindingPropertiesComponent } from './components/binding-properties/binding-properties.component';
import { FormsModule } from '@angular/forms';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { StylesComponent } from './components/styles/styles.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { GrandfatherCounterComponent } from './counter/grandfather-counter/grandfather-counter.component';
import { FatherCounterComponent } from './counter/father-counter/father-counter.component';
import { ChildCounterComponent } from './counter/child-counter/child-counter.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { RandomNumPipe } from './pipes/random-num.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    BindingPropertiesComponent,
    ConstructorComponent,
    StylesComponent,
    DecoratorsComponent,
    GrandfatherCounterComponent,
    FatherCounterComponent,
    ChildCounterComponent,
    PageHeaderComponent,
    TextCapitalPipe,
    RandomNumPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
