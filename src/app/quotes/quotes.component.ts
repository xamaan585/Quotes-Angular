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
    new Quote (2,'Omar', 'Music', 'Music is like a dream.One that i cannot hear.', 'Ludwig Van Beethoven', new Date(2021,12,28),0,0),
    new Quote (3,'Tom', 'Technology', 'Any sufficiantlyadvanced technology is equivalent to magic.', 'Arthur C. Clarke', new Date(2021,12,28),0,0),
    new Quote (4,'Mohamed', 'Religion', 'Religion is the bridge between human races.', 'clay Shirky', new Date(2021,12,28),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a,b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(quote){
    let  arraysize = this.quotes.length;
    quote.id = arraysize+ 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Confirm to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  displayInfo(index) {
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
