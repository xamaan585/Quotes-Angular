import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { HighlightQuoteDirective } from './highlight-quote.directive';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DatePipePipe } from './date-pipe.pipe';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    HighlightQuoteDirective,
    QuoteDetailsComponent,
    DatePipePipe,
    QuotesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
