import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Insightful Quotes';
  quotes:Quote[] = [
    new Quote (1,'Selb', 'Love Theory', 'Love all,trust a few,do wrong to none.', 'Tim Kim', new Date(2021,12,28),0,0),
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
